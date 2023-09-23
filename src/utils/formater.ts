export const dateFormaer = new Intl.DateTimeFormat('pt-Br')

export const priceFormaer = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
})