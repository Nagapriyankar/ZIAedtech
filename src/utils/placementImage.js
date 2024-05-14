import amazon from '../image/placementImage/amazon.png'
import ashokleyland from '../image/placementImage/ashokleyland.png'
import caterpillar from '../image/placementImage/caterpillar.png'
import flipkart from '../image/placementImage/flipkart.png'
import freshworks from '../image/placementImage/freshworks.png'
import hyundai from '../image/placementImage/hyundai.png'
import isuzu from '../image/placementImage/isuzu.png'
import paypal from '../image/placementImage/paypal.png'
import paytm from '../image/placementImage/paytm.png'
import zoho from '../image/placementImage/zoho.png'


export const placementImage = (image) => {
    const imageID = image.toLowerCase()
    switch (imageID) {
        case 'zoho':
            return zoho;
        case 'amazon':
            return amazon;
        case 'ashokleyland':
            return ashokleyland;
        case 'caterpillar':
            return caterpillar;
        case 'flipkart':
            return flipkart;
        case 'freshworks':
            return freshworks;
        case 'hyundai':
            return hyundai;
        case 'isuzu':
            return isuzu;
        case 'paypal':
            return paypal;
        case 'paytm':
            return paytm;
        default:
            break;
    }
}

