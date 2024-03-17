// This file contains the data for the projects page.

// imports for Fig Bistro
import figBistroBackground from '../assets/fig-bistro-background.JPG';
import fig2 from '../assets/fig-beer-garden.JPG';
import fig3 from '../assets/fig-dining.JPG';
import fig4 from '../assets/fig-outdoor.JPG';
import fig5 from '../assets/fig-playground.JPG';
import fig6 from '../assets/fig-plant.JPG';
import fig7 from '../assets/fig-tables.JPG';
//imports for Hepburns
import hepburnsBackground from '../assets/hepburns-background.jpg';
import hepburnsFarView from '../assets/hepburns-far-view.JPG';
import hepburns2 from '../assets/hepburns-wide.JPG';
import hepburns3 from '../assets/hepburns-seating.JPG';
import hepburns4 from '../assets/hepburns-benches.JPG';
import hepburns5 from '../assets/hepburns-wall.JPG';
import hepburns6 from '../assets/hepburns-couches.JPG';
// imports for Captain's Quarters
import captainBackground from '../assets/captain-background.JPG';
import captain2 from '../assets/captain-cockatoo.JPG';
import captain3 from '../assets/captain-fireplace.JPG';
import captain4 from '../assets/captain-balcony.JPG';
import captain5 from '../assets/captain-mirror.JPG';
import captain6 from '../assets/captain-bed.JPG';
import captain7 from '../assets/captain-lounge.JPG';
// imports for DoReMi
import doremiBackground from '../assets/doremi-background.jpg';
import doremi2 from '../assets/doremi-couch.jpg';
import doremi3 from '../assets/doremi-table.jpg';
// imports for Proud Henry
import proudHenryBackground from '../assets/proud-henry-background.JPG';
import proudHenry2 from '../assets/proud-henry-cellar.JPG';
import proudHenry3 from '../assets/proud-henry-birdsnest.JPG';
import proudHenry4 from '../assets/proud-henry-greenwall.JPG';
import proudHenry5 from '../assets/proud-henry-barseats.JPG';
import proudHenry6 from '../assets/proud-henry-customwall.JPG';
import proudHenry7 from '../assets/proud-henry-peacock.JPG';
// imports for Grape Therapy
import grapeTherapyBackground from '../assets/grape-therapy-background.JPG';
import grapeTherapy2 from '../assets/grape-therapy-lounge.JPG';
import grapeTherapy3 from '../assets/grape-therapy-barrell.JPG';
import grapeTherapy4 from '../assets/grape-therapy-lamp.JPG';
import grapeTherapy5 from '../assets/grape-therapy-entrance.JPG';
import grapeTherapy6 from '../assets/grape-therapy-couches.JPG';
import grapeTherapy7 from '../assets/grape-therapy-main.JPG';


export const projectsData = [
    // FIG BISTRO
    {
      slug: "fig-bistro",
      title: "Fig Bistro",
      location: "WYNNUM, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: "Welcome to Fig Bistro, an enchanting Alfresco dining experience nestled within the serene ambiance of the Waterloo Bay Hotel in Wynnum. As you step into the oasis, you're greeted by the gentle rustle of palm leaves and the inviting aroma of freshly prepared cuisine. Drawing inspiration from its bayside location, Fig Bistro exudes a charming nautical vibe, seamlessly blending with the surrounding greenery. The interior design ethos revolves around creating an inviting and cosy atmosphere, perfect for gatherings with loved ones or quiet moments of relaxation. At the heart of the design concept lies functionality and versatility. White Plantation shutters elegantly section off different areas, effortlessly accommodating small intimate gatherings or larger groups with ease. The open-concept layout seamlessly transitions between spaces, offering an intimate dining experience while still embracing the expansive outdoors." }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "Biophilic design principles infuse every corner of Fig Bistro, fostering a deep connection with nature. Natural timbers and coastal-inspired hues dominate the palette, evoking a sense of tranquility and warmth. Lush greenery accents the space, blurring the boundaries between indoors and outdoors, creating a harmonious sanctuary for patrons to unwind. As you settle into your seat, you'll find yourself surrounded by the soothing embrace of nature, with the gentle breeze and dappled sunlight adding to the enchanting ambiance." }] },
      ],
      backgroundImage: { url: figBistroBackground },
      imagesGallery: [
        { url: fig2, alt: "Fig Bistro Beer Garden" },
        { url: fig3, alt: "Fig Bistro Dining" },
        { url: fig4, alt: "Fig Bistro Outdoor" },
        { url: fig5, alt: "Fig Bistro Playground" },
        { url: fig6, alt: "Fig Bistro Plant" },
        { url: fig7, alt: "Fig Bistro Tables" },
      ],
    },
    // HEPBURN'S LOUNGE & DINING
    {
      slug: "hepburns",
      title: "Hepburn's Lounge & Dining",
      location: "WYNNUM, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: "The inspiration was to revitalize a once forgotten and tired eatery, infusing it with the charm and elegance of a Parisian café by day and an intimate candlelit bistro by night. To achieve this vision, we embarked on a journey of upcycling and repurposing, ensuring that the essence of the original space remained while adding a touch of modern European eclecticism. The bones of the original tables and chairs were salvaged and rejuvenated with new timber tops, breathing fresh vitality into their worn surfaces. To enhance comfort and style, each seating element was meticulously curated. Navy tufted commercial grade upholstery was carefully selected to harmonize with the newly designed timber banquettes and the Bentwood chairs were saved from landfill with a matching navy button seat cushion, creating a cohesive and inviting atmosphere." }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "In addition to the main seating areas, we introduced crocheted accent pillows to add a playful yet elegant touch, further enriching the ambiance with their whimsical charm. Every detail was thoughtfully considered, from the choice of materials and artwork to the arrangement of furnishings, all working together to evoke the atmosphere of a chic Parisian hideaway. By repurposing existing elements and infusing them with modern flair, we successfully created a space that transcends time, offering patrons a multifaceted experience that seamlessly transitions from day to night. Whether enjoying a leisurely brunch bathed in sunlight or savoring a romantic dinner by candlelight, the Parisian-inspired ambiance of this café-turned-bistro invites guests to indulge in moments of European charm and sophistication. " }] },
      ],
      backgroundImage: { url: hepburnsBackground },
      imagesGallery: [
        { url: hepburnsFarView, alt: "Hepburns view from afar" },
        { url: hepburns2, alt: "Wide view" },
        { url: hepburns3, alt: "Seating Area" },
        { url: hepburns4, alt: "Hepburns Benches" },
        { url: hepburns5, alt: "Wall details" },
        { url: hepburns6, alt: "Hepburns couches" },
      ],    
    },
    // CAPTAIN'S QUARTERS
    {
      slug: "captains-quarters",
      title: "Captain's Quarters",
      location: "WYNNUM, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: " Step into the captivating revival of the Captain's Quarter's at the Waterloo Bay Hotel—a once-forgotten relic now boldly flaunting its 1889 heritage. As the visionary behind this transformation, our mission was clear: to celebrate the timeless elegance of this historic space while infusing it with a fresh vitality that pays homage to its coastal surroundings. With meticulous attention to detail, I restored remnants of its storied past, from the majestic fireplace mantel to the enduring hardwood flooring. Every element within these walls serves as a narrative, a testament to the beauty of history reborn. we breathed new life into weathered relics, infusing them with a modern twist that's equal parts audacious and sophisticated. These preserved treasures laid the foundation for a coastal-plantation oasis like no other—a fusion of classic sophistication and contemporary cool. Weathered wood accents dance alongside sleek lines and industrial touches, while a palette of crisp whites and moody blues evokes the serene ambiance of coastal living with a hint of urban edge." }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "In every corner, echoes of the past mingle with the vibrancy of the present. Vintage-inspired furnishings and bespoke accents add layers of character and warmth, inviting guests to immerse themselves in a space where history meets plantation nouveau. The revitalization of the Captain's suite was more than just a renovation, it was a bold declaration of design prowess and a celebration of the enduring spirit of a bygone era. With each curated detail, we aimed to create a space that not only honors its heritage but also serves as a canvas for contemporary elegance, inviting guests to make their mark on history in this stylish sanctuary. " }] },
      ],
      backgroundImage: { url: captainBackground },
      imagesGallery: [
        { url: captain2, alt: "Cockatoo painting" },
        { url: captain3, alt: "Fireplace" },
        { url: captain4, alt: "Lounge area" },
        { url: captain5, alt: "Mirror detail" },
        { url: captain6, alt: "Balcony area" },
        { url: captain7, alt: "Lounge" },
      ],  
    },
    // DOREMI
    {
      slug: "doremi",
      title: "Do Re Mi Cafe'",
      location: "WYNNUM, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: "Immerse yourself in a harmonious blend of nostalgia and modernity at this little Cafe, where every detail pays homage to the timeless allure of the Sound of Music. Inspired by the venue's namesake, the furniture and styling design plan was meticulously crafted to evoke the essence of this beloved classic. The aim was to create an enchanting and antiquated ambiance that transports customers to a simpler time, while still embracing the comforts of modernity. " }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "During this project, a collection of antique, mid-century pieces and vintage decor were carefully sourced, each selected to evoke a sense of nostalgia and romance. Additionally, artwork inspired by the iconic scenes and imagery from the classic film were strategically incorporated, adding an extra layer of storytelling to the space. From elegant furnishings to whimsical accents, every element within the space tells a story of timeless elegance and sophistication. Weathered wood finishes, plush upholstery, and ornate detailing transport guests back in time, while sleek lines and minimalist touches add a hint of modern flair. The result is a captivating fusion of past and present. " }] },
      ],
      backgroundImage: { url: doremiBackground },
      imagesGallery: [
        { url: doremi2, alt: "Couch" },
        { url: doremi3, alt: "Table" },

      ],  
    },
    // PROUD HENRY
    {
      slug: "proud-henry",
      title: "Proud Henry Ginoteca & Wine Bar",
      location: "FORTITUDE VALLEY, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: "Once a convenient shop and newspaper agency, dating back to the early 1900's, A Ginoteca and Wine bar was later born in its place, shaping what now feels like a hidden gem straight out of the laneways of London. Drawing inspiration from the mascot Henry, a proud peacock, the interior reflects his regal presence with a color scheme to match. When you step inside you are transported to a world where vintage wares, retro artwork, antique lighting, textiles, and carefully selected antique and custom furniture pieces combine to create an eclectic and playful atmosphere. From the moment you enter, you'll be captivated by the charm, history and character of the space. Unique treasures adorn every corner, adding depth and personality to the surroundings. " }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "The creativity didn't stop there. We took things a step further by revitalizing an abandoned office upstairs overlooking the venue by transforming this unused space into the enchanting 'Bird's Nest,' an aviary-inspired seating area where customers can escape the hustle and bustle below with surrounding greenery and an elevated view of the back courtyard. In addition, behind the venue itself, a private tasting room known as the Cellar was designed out of an old brick encased bunker that was used to host secret poker games, adding an extra layer of intrigue and nostalgia to the space. The cellar leads to a lush, sun-basking, outdoor courtyard. We wanted to create an ideal setting to sip on a gin cocktail or glass of vino while sitting at custom designed, recycled timber high bar tables that fold down, a perfect solution to maximize space and customers in a long and narrow space. Every corner of this venue was thoughtfully curated with both splendor and functionality in mind, with the aim to capture the history of this heritage listed building." }] },
      ],
      backgroundImage: { url: proudHenryBackground },
      imagesGallery: [
        { url: proudHenry2, alt: "Cellar Room" },
        { url: proudHenry3, alt: "Birds Nest area" },
        { url: proudHenry4, alt: "Green wall detail" },
        { url: proudHenry5, alt: "Bar seating" },
        { url: proudHenry6, alt: "Custom bar wall" },
        { url: proudHenry7, alt: "Peacock" },
      ],  
    },
    // GRAPE THERAPY
    {
      slug: "grape-therapy",
      title: "Grape Therapy Wine & Whisky Bar",
      location: "BRISBANE, QLD",
      interiorDesign: "HONEY & HIVE",
      projectType: "COMMERCIAL",
      description: [
        { type: "paragraph", 
        children: [{ text: "A speakeasy, underground Wine and Whisky Bar, with an ambiance steeped in nostalgia, evoking the Rat Pack feel and jazz accompaniment of yesteryears. Sparked by this retro charm, we endeavored to transport our guests back to the swinging 1960s, where life was simpler and the atmosphere was imbued with timeless elegance. With meticulous attention to detail, we curated a space that exudes intimacy and sophistication. Vintage chesterfields beckon guests to sink into plush comfort, while restored doors repurposed as communal tables offer a unique and communal dining experience. Antique lighting fixtures cast a warm, inviting glow, enhancing the ambiance of nostalgia and refinement." }] },
      ],
      concept: [
        { type: "paragraph", children: [{ text: "Every aspect of the décor, from the retro artwork to the carefully selected furnishings, contributes to the immersive experience of stepping back in time. As guests sip on fine wine and whisky, they are transported to an era where every moment is savored and every conversation is filled with intrigue. The Wine and Whisky Bar is not just a venue; it's a journey through time—a place where the spirit of the past mingles with the pleasures of the present. This project was a celebration of the timeless allure of vintage charm and the art of indulgence in a setting that is as enchanting as it is unforgettable." }] },
      ],
      backgroundImage: { url: grapeTherapyBackground },
      imagesGallery: [
        { url: grapeTherapy2, alt: "Lounge area" },
        { url: grapeTherapy3, alt: "Barrell seating" },
        { url: grapeTherapy4, alt: "1920's lamp" },
        { url: grapeTherapy5, alt: "Stairs entrance" },
        { url: grapeTherapy6, alt: "Red leather couches" },
        { url: grapeTherapy7, alt: "Main dining" },
      ],  
    },
  ];
  