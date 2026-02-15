import QRCodeStyling from "qr-code-styling";

interface GenerateMailQrParams {
  email: string
  name: string
  description?: string
  organization?: string
  imap?: string
  smtp?: string
  autoDetect?: boolean
}

export async function generateMailQr({
                                       email,
                                       name,
                                       description,
                                       organization,
                                       imap,
                                       smtp,
                                       autoDetect = false,
                                     }: GenerateMailQrParams) {
  if (autoDetect) {
    const res = await fetch(`/api/detect-mail?email=${encodeURIComponent(email)}`)
    const result = await res.json()

    if (!result.imap || !result.smtp) {
      throw new Error("Could not detect mail servers")
    }

    imap = result.imap
    smtp = result.smtp
  }

  if (!imap || !smtp) throw new Error("Missing IMAP or SMTP server info")

  const params = new URLSearchParams()
  params.append("email", email)
  params.append("name", name)
  params.append("imap", imap)
  params.append("smtp", smtp)
  if (description) params.append("description", description)
  if (organization) params.append("organization", organization)

  const configUrl = `${window.location.origin}/api/mailconfig?${params}`

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: configUrl,
    margin: 10,
    qrOptions: {
      errorCorrectionLevel: "M"
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0
    },
    dotsOptions: {
      color: "#121212",
      type: "rounded" // Try "rounded" instead of "dots"
    },
    backgroundOptions: {
      color: "#F4F1E8"
    },
    cornersSquareOptions: {
      color: "#121212",
      type: "extra-rounded"
    },
    cornersDotOptions: {
      color: "#121212",
      type: "dot"
    }
  })

  return new Promise<string>((resolve, reject) => {
    // Use a small delay to ensure rendering completes
    setTimeout(() => {
      qrCode.getRawData("png").then(blob => {
        if (!blob) {
          reject(new Error("Failed to generate QR code"))
          return
        }

        if (!(blob instanceof Blob)) {
          reject(new Error("Expected Blob but got Buffer"))
          return
        }

        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }).catch(reject)
    }, 100)
  })


  // const qrData = await QRCode.toDataURL(configUrl, { width: 300, margin: 0, color: {dark: '#121212', light: '#F4F1E8'}, scale: 4 })
  //
  // return qrData
}
