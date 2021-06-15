import { formatDistance, format } from 'date-fns'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const FRONTEND_URL = process.env.FRONTEND_URL
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK
export const API_ORDERS_URL = `${API_URL}/orders/`
export const API_PRODUCTS_URL = `${API_URL}/products/`
export const API_CATEGORIES_URL = `${API_URL}/categories/`
export const API_MERCHANTS_URL = `${API_URL}/merchants/`
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SK = process.env.GOOGLE_CLIENT_SK

export const REVIEW_TEXT_LEN = 128

/**
 * Given an image (from strapi api) return the URL
 * Works for local & deployed strapis
 * 
 * URL = API_URL/image.url
 * 
 * @param  {any} image
 * 
 */
export function imageToUrl(image) {

    if (!image) {
        return '/cropped-logo.svg'
    }
    
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return `${API_URL}${image.url}`
    } else {
        return image.url
    }
}

export function distanceFromToday(str_date) {
    const review_date = new Date(str_date)
    return formatDistance(review_date, new Date(), { addSuffix: true })
}   

export function stringToDate(str_date) {
    
    const review_date = new Date(str_date)
    return format(review_date, "eee, dd MMM y")
}
 