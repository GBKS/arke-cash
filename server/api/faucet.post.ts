// server/api/faucet.post.ts
export default defineEventHandler(async (event) => {
  const { address } = await readBody(event)
  const amount_sat = 10000  // Amount in satoshis to send

  // console.log('Faucet request for address:', address)
  
  // Validate address format
  if (!address?.startsWith('ark1') && !address?.startsWith('tark1')) {
    throw createError({ 
      statusCode: 400, 
      message: 'Invalid Ark address' 
    })
  }

  try {
    const response = await $fetch('https://faucet.arke.cash/api/v1/wallet/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.FAUCET_SECRET}`,
        'Content-Type': 'application/json'
      },
      body: {
        destination: address,
        amount_sat: amount_sat
      }
    })

    return { success: true, data: response, amount: amount_sat }
  } catch (error) {
    console.error('Faucet error:', error)
    throw createError({ 
      statusCode: 500, 
      message: 'Failed to send funds' 
    })
  }
})