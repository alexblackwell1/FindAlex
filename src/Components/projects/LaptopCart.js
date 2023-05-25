import DefaultCard from './DefaultCard';
import laptop_cart_img from '../../styling/assets/laptop_cart.jpg'

const name = 'Laptop Checkout Cart'

function LaptopCartCard() {
    const summary = `
        I participated in Appalachian States 2022 Hackathon, AppHack.
        Partnering with Hunter Ringley, a friend and coworker at Belk Library, we designed a prototype laptop checkout cart.
        Over the 24 hours, we developed a system that would scan students id's
        and check within the local database to see if (and which) machines were checkouted to them.
        It would 'unlock' to allow them to take a machine or return one, removing that pc from their name in the database.`;
        
    return DefaultCard(name, laptop_cart_img, summary);
}

function LaptopCartPage() { 

}

export { LaptopCartCard, LaptopCartPage };