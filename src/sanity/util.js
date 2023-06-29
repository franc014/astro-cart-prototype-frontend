import { useSanityClient } from "astro-sanity";
export async function getProducts() {
    const productsQuery = `
    *[_type=='product']
    `;
    return await useSanityClient().fetch(productsQuery);
}
