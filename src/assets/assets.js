import header from './Logo.png';
import title from './Title.png'
import hero from './Hero.png'
import umbrella from './Umbrella.png'
import plane from './plane.png'
import Mike from './Mike.png'
import Gear from './GearIcon.png'
import Rome from './Rome.png'
import Europe from './Europe.png'
import London from './London.png'
import navigate from './navigate.png'
import step1 from './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import greece from './Greece.png'
import leaf from './leaf.png'
import map from './Map.png'
import send from './send.png'
import building from './Building.png'
import reviewerImage from './reviewerImage.png'
import DownArrow from './DownArrow.png'
import UpArrow from './UpArrow.png'
import AllLogos from './allLogos.png'
import TelegramIcon from './TelegramIcon.png'
import fb from './FB.png'
import insta from './Insta.png'
import twitter from './Twitter.png'
import googlePlay from './googlePlay.png'
import appleIcon from './AppleLogo.png'


export const images = {
    header,
    title,
    hero,
    umbrella,
    plane,
    Mike,
    Gear,
    Rome,
    Europe,
    London,
    navigate,
    step1,
    step2,
    step3,
    greece,
    leaf,
    map,
    send,
    building,
    reviewerImage,
    UpArrow,
    DownArrow,
    AllLogos,
    TelegramIcon,
    fb,
    insta,
    twitter,
    googlePlay,
    appleIcon
}


const Services =[
    {
        title:"Calculated Weather",
        desc:"Built Wicket longer admire do barton vanity itself do in it.",
        image:umbrella
    },
    {
        title:"Best Flights",
        desc:"Engrossed listening. Park gate sell they west hard for the.",
        image:plane
    },
    {
        title:"Local Events",
        desc:"Barton vanity itself do in it. Preferd to men it engrossed listening.",
        image:Mike
    },
    {
        title:"Customizations",
        desc:"We deliver outsourced aviation services for military customers",
        image:Gear
    }
]

const destinations=[
    {
        image:Rome,
        city:"Rome, Italy",
        price:"$ 5,42k",
        tripDuration:"10 Days Trip"
    },
    {
        image:London,
        city:"London, UK",
        price:"$ 4.2k",
        tripDuration:"12 Days Trip"
    },
    {
        image:Europe,
        city:"Full Europe",
        price:"$ 15k",
        tripDuration:"28 Days Trip"
    }
]

const designSteps =[
    {
        stepTitle:"Choose Destination",
        stepDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        stepImg:step1
    },
    {
        stepTitle:"Make Payment",
        stepDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        stepImg:step2
    },
    {
        stepTitle:"Reach Airport on Selected Date",
        stepDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        stepImg:step3
    },
]


const reviews =[
    {
        reviewerImage:reviewerImage,
        review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        reviewerName:"Mike taylor Reviewer 1",
        place:"Lahore, Pakistan"
    },
    {
        reviewerImage:reviewerImage,
        review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        reviewerName:"Mike taylor Reviewer 2",
        place:"Lahore, Pakistan"
    },
    {
        reviewerImage:reviewerImage,
        review:"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        reviewerName:"Mike taylor Reviewer 3",
        place:"Lahore, Pakistan"
    }
]

export const Data =
{
    Services,
    destinations,
    designSteps,
    reviews
}
