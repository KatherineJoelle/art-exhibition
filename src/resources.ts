

export default {

    models: {

        /////// Base Components

        // change the skybox here
    skybox: {
            skyboxShape: new GLTFShape('models/skybox.glb') // skybox model (thanks to Kirzoz for advice on this!)
        },
     booths: {
        // change the booths here
       boothShape1: new GLTFShape('models/booth1.glb'), // booth shape 1
       boothShape2: new GLTFShape('models/booth2.glb'), // booth shape 2
       boothShape3: new GLTFShape('models/booth3.glb') // booth shape 3
    },
    ground: {
        // change the floor tile here
        floorTileShape: new GLTFShape('models/floorTile.glb') // ground tile
    },





    /////////// Artwork //////////////////
    ////// Enter your artwork data sets below in the corresponding parcel #


    //// To add a 3D model put the path to the glb in the "artwork" section and the model in your "models" scene folder
    //// To add a static image put the link to the hosted image (see below for hosting info) in the "serverImageLinks" section where it says "your link here"
    //// To add a video put the link to the hosted video (see below for hosting info) in the "serverVideoLinks" section where it says "your link here" 
    ////    and add a placeholder image of the first frame of the video in the "serverImagesLinks" section at the bottom where it says "placeholder images for videos" inside the part that says "your link here"



    ///// 3D art

    // You can add 3d models here and put them in the "models" scene folder
    artwork: {
        parcel57Art: new GLTFShape('models/LPM-logo.glb'), // insert path to 3d model
        parcel58Art: new GLTFShape('models/LPM-logo.glb'), // insert path to 3d model
        parcel59Art: new GLTFShape('models/your model.glb'), // insert path to 3d model
        parcel67Art: new GLTFShape('models/your model.glb'), // insert path to 3d model
        parcel68Art: new GLTFShape('models/your model.glb'), // insert path to 3d model
        parcel82Art: new GLTFShape('models/your model.glb'), // insert path to 3d model
    }
    },


    /////// Static Image Art 

    // You can use https://nft.storage/files/ to upload images to a server and load them into DCL - shoutout Nikki for this link <3
    serverImageLinks: {
        parcel1pic: new Texture("your link here"), // insert your image link here
        parcel2pic: new Texture("your link here"),
        parcel3pic: new Texture("your link here"),
        parcel4pic: new Texture("your link here"),
        parcel5pic: new Texture("your link here"), 
        parcel6pic: new Texture("your link here"), 
        parcel7pic: new Texture("your link here"), 
        parcel8pic: new Texture("your link here"), 
        parcel9pic: new Texture("your link here"),
        parcel10pic: new Texture("your link here"),
        parcel11pic: new Texture("your link here"),
        parcel12pic: new Texture("your link here"),
        parcel13pic: new Texture("your link here"),
        parcel15pic: new Texture("your link here"),
        parcel16pic: new Texture("your link here"),
        parcel17pic: new Texture("your link here"),
        parcel18pic: new Texture("your link here"),
        parcel19pic: new Texture("your link here"),
        parcel20pic: new Texture("your link here"),
        parcel21pic: new Texture("your link here"),
        parcel22pic: new Texture("your link here"),
        parcel23pic: new Texture("your link here"),
        parcel24pic: new Texture("your link here"),
        parcel25pic: new Texture("your link here"),
        parcel26pic: new Texture("your link here"),
        parcel27pic: new Texture("your link here"),
        parcel28pic: new Texture("your link here"),
        parcel29pic: new Texture("your link here"),
        parcel30pic: new Texture("your link here"),
        parcel31pic: new Texture("your link here"),
        parcel32pic: new Texture("your link here"),
        parcel33pic: new Texture("your link here"),
        parcel34pic: new Texture("your link here"),
        parcel35pic: new Texture("your link here"),
        parcel36pic: new Texture("your link here"),
        parcel37pic: new Texture("your link here"),
        parcel38pic: new Texture("your link here"),
        parcel39pic: new Texture("your link here"),
        parcel40pic: new Texture("your link here"),
        parcel41pic: new Texture("your link here"),
        parcel42pic: new Texture("your link here"),
        parcel43pic: new Texture("your link here"),
        parcel44pic: new Texture("your link here"),
        parcel45pic: new Texture("your link here"),
        parcel46pic: new Texture("your link here"),
        parcel47pic: new Texture("your link here"),
        parcel48pic: new Texture("your link here"),
        parcel49pic: new Texture("your link here"),
        parcel50pic: new Texture("your link here"),
        parcel51pic: new Texture("your link here"),
        parcel52pic: new Texture("your link here"),
        parcel53pic: new Texture("your link here"), 
        parcel54pic: new Texture("your link here"),
        parcel55pic: new Texture("your link here"),
        parcel56pic: new Texture("your link here"),
        parcel57pic: new Texture("your link here"),
        parcel58pic: new Texture("your link here"),
        parcel59pic: new Texture("your link here"),  
        parcel60pic: new Texture("your link here"),   
        parcel61pic: new Texture("your link here"),   
        parcel62pic: new Texture("your link here"),
        parcel63pic: new Texture("your link here"),
        parcel64pic: new Texture("your link here"),
        parcel65pic: new Texture("your link here"),
        parcel66pic: new Texture("your link here"),
        parcel67pic: new Texture("your link here"), 
        parcel68pic: new Texture("your link here"), 
        parcel69pic: new Texture("your link here"),
        parcel70pic: new Texture("your link here"),
        parcel71pic: new Texture("your link here"), 
        parcel72pic: new Texture("your link here"),
        parcel73pic: new Texture("your link here"),
        parcel74pic: new Texture("your link here"),
        parcel75pic: new Texture("your link here"),
        parcel76pic: new Texture("your link here"), 
        parcel77pic: new Texture("your link here"), 
        parcel78pic: new Texture("your link here"),
        parcel79pic: new Texture("your link here"),
        parcel80pic: new Texture("your link here"),
        parcel81pic: new Texture("your link here"), 
        parcel82pic: new Texture("your link here"), 
        parcel83pic: new Texture("your link here"), 
        parcel84pic: new Texture("your link here"),
        parcel85pic: new Texture("your link here"),
        parcel86pic: new Texture("your link here"), 
        parcel87pic: new Texture("your link here"),
        parcel88pic: new Texture("your link here"),
        parcel89pic: new Texture("your link here"),
        parcel90pic: new Texture("your link here"),
        parcel91pic: new Texture("your link here"), 
        parcel92pic: new Texture("your link here"), 
        parcel93pic: new Texture("your link here"),
        parcel94pic: new Texture("your link here"),
        parcel95pic: new Texture("your link here"),
        parcel96pic: new Texture("your link here"),
        parcel97pic: new Texture("your link here"),
        parcel98pic: new Texture("your link here"),
        parcel99pic: new Texture("your link here"),
        parcel100pic: new Texture("your link here"),




        // placeholder images for Videos
        parcel14Placeholder: new Texture ("your link here"), // insert your video placeholder image here
        parcel24Placeholder: new Texture ("your link here"),
        parcel34Placeholder: new Texture ("your link here"),
        parcel51Placeholder: new Texture ("your link here"),
        parcel52Placeholder: new Texture ("your link here"),
        parcel76Placeholder: new Texture ("your link here"),
        parcel61Placeholder: new Texture ("your link here"),
        parcel71Placeholder: new Texture ("your link here"),
        parcel77Placeholder: new Texture ("your link here"),
        parcel81Placeholder: new Texture ("your link here"),
        parcel86Placeholder: new Texture ("your link here"),
        parcel91Placeholder: new Texture ("your link here"),
        parcel92Placeholder: new Texture ("your link here"),



    },

    ///// Video Art

    /// You can use Vimeo Premium to upload video files and get an m3u8 link that will work in DCL
    serverVideoLinks: {
        parcel14Video: new VideoClip("https://player.vimeo.com/external/850380681.m3u8?s=21c3fa710c276c7044492d1740ee3a7e806f2cea"), // example video link 
        parcel24Video: new VideoClip("your link here"), 
        parcel34Video: new VideoClip("your link here"),
        parcel51Video: new VideoClip("your link here"),
        parcel52Video: new VideoClip("your link here"),
        parcel61video: new VideoClip("your link here"),
        parcel71Video: new VideoClip("your link here"),
        parcel76Video: new VideoClip("your link here"),
        parcel77Video: new VideoClip("your link here"),
        parcel81Video: new VideoClip("your link here"),
        parcel86Video: new VideoClip("your link here"),
        parcel91Video: new VideoClip("your link here"),
        parcel92Video: new VideoClip("your link here"),
    },





    ////// Links to artwork / NFT / artist profile / social media


    artistLinks: {
           parcelLink1: ("your link here"),
           parcelLink2: ("your link here"),
           parcelLink3: ("your link here"),
           parcelLink4: ("your link here"),
           parcelLink5: ("your link here"),
           parcelLink6: ("your link here"),
           parcelLink7: ("your link here"),
           parcelLink8: ("your link here"),
           parcel9Link: ("your link here"),
           parcel10Link: ("your link here"),
           parcel11Link: ("your link here"),
           parcel12Link: ("your link here"),
           parcel13Link: ("your link here"),
           parcel14Link: ("your link here"),
           parcel15Link: ("your text here"),
           parcel16Link: ("your text here"),
           parcel17Link: ("your link here"),
           parcel18Link: ("your link here"),
           parcel19Link: ("your link here"),
           parcel20Link: ("your link here"),
           parcel21Link: ("your text here"),
           parcel22Link: ("your text here"),
           parcel23Link: ("your text here"),
           parcel24Link: ("your link here"),
           parcel25Link: ("your text here"),
           parcel26Link: ("your text here"),
           parcel27link: ("your link here"),
           parcel28Link: ("your link here"),
           parcel29Link: ("your link here"),
           parcel30Link: ("your link here"),
           parcel31Link: ("your text here"),
           parcel32Link: ("your text here"),
           parcel33Link: ("your text here"),
           parcel34Link: ("your link here"),
           parcel35Link: ("your link here"),
           parcel36Link: ("your link here"),
           parcel37Link: ("your link here"),
           parcel38Link: ("your link here"),
           parcel39Link: ("your link here"),
           parcel40Link: ("your link here"),
           parcel41Link: ("your link here"),
           parcel42Link: ("your link here"),
           parcel43Link: ("your link here"),
           parcel44Link: ("your link here"),
           parcel45Link: ("your link here"),
           parcel46Link: ("your link here"),
           parcel47Link: ("your link here"),
           parcel48Link: ("your link here"),
           parcel49Link: ("your link here"),
           parcel50Link: ("your link here"),
           parcel51Link: ("your link here"),
           parcel52Link: ("your link here"),
           parcel53Link: ("your link here"), 
           parcel54Link: ("your link here"),
           parcel55Link: ("your link here"),
           parcel56Link: ("your link here"),
           parcel57Link: ("your link here"),
           parcel58Link: ("your link here"),
           parcel59Link: ("your link here"),
           parcel61Link: ("your link here"),
           parcel62Link: ("your link here"),
           parcel63Link: ("your link here"), 
           parcel64Link: ("your link here"),
           parcel65Link: ("your link here"),
           parcel67Link: ("your link here"),
           parcel68Link: ("your link here"),
           parcel82Link: ("your link here"),
           parcel66Link: ("your link here"),
           parcel69Link: ("your link here"),
           parcel70Link: ("your link here"),
           parcel71Link: ("your link here"),
           parcel72Link: ("your link here"),
           parcel73Link: ("your link here"), 
           parcel74Link: ("your link here"),
           parcel75Link: ("your link here"),
           parcel76Link: ("your link here"),
           parcel77Link: ("your link here"),
           parcel78Link: ("your link here"),
           parcel79Link: ("your link here"),
           parcel80Link: ("your link here"),
           parcel81Link: ("your link here"),
           parcel83Link: ("your link here"),
           parcel84Link: ("your link here"),
           parcel85Link: ("your link here"),
           parcel86Link: ("your link here"),
           parcel87Link: ("your link here"),
           parcel88Link: ("your link here"),
           parcel89Link: ("your link here"),
           parcel90Link: ("your link here"),
           parcel91Link: ("your link here"),
           parcel92Link: ("your link here"),
           parcel93Link: ("your link here"),
           parcel94Link: ("your link here"),
           parcel95Link: ("your link here"),
           parcel96Link: ("your link here"),
           parcel97Link: ("your link here"),
           parcel98Link: ("your link here"),
           parcel99Link: ("your link here"),
           parcel100Link: ("your link here"),
        
        },





        /////// Text to display when cursor hovers on artwork
        //// You can use \n to make a line breaks


    hoverText:
        {
           parcel1Text: ("Introspection (2017) | Geoff Robertson"), // Example 
           parcel2Text: ("your text here"),
           parcel3Text: ("your text here"),
           parcel4Text: ("your text here"),
           parcel5Text: ("your text here"),
           parcel6Text: ("your text here"),
           parcel7Text: ("your text here"),
           parcel8Text: ("your text here"),
           parcel9Text: ("your text here"),
           parcel10Text: ("your text here"),
           parcel11Text: ("your text here"),
           parcel12Text: ("your text here"),
           parcel13Text: ("your text here"),
           parcel14Text: ("your text here"),
           parcel15Text: ("your text here"),
           parcel16Text: ("your text here"),
           parcel17Text: ("your text here"),
           parcel18Text: ("your text here"),
           parcel19Text: ("your text here"),
           parcel20Text: ("your text here"),
           parcel21Text: ("your text here"),
           parcel22Text: ("your text here"),
           parcel23Text: ("your text here"),
           parcel24Text: ("your text here"),
           parcel25Text: ("your text here"),
           parcel26Text: ("your text here"),
           parcel27Text: ("your text here"),
           parcel28Text: ("your text here"),
           parcel29Text: ("your text here"),
           parcel30Text: ("your text here"),
           parcel31Text: ("your text here"),
           parcel32Text: ("your text here"),
           parcel33Text: ("your text here"),
           parcel34Text: ("your text here"),
           parcel35Text: ("your text here"),
           parcel36Text: ("your text here"),
           parcel37Text: ("your text here"),
           parcel38Text: ("your text here"),
           parcel39Text: ("your text here"),
           parcel40Text: ("your text here"),
           parcel41Text: ("your text here"),
           parcel42Text: ("your text here"),
           parcel43Text: ("your text here"),
           parcel44Text: ("your text here"),
           parcel47Text: ("your text here"),
           parcel49Text: ("your text here"),
           parcel48Text: ("your text here"),
           parcel50Text: ("your text here"),
           parcel51Text: ("your text here"),
           parcel52Text: ("your text here"),
           parcel53Text: ("your text here"), 
           parcel61Text: ("your text here"),
           parcel62Text: ("your text here"),
           parcel63Text: ("your text here"),
           parcel64Text: ("your text here"),
           parcel65Text: ("your text here"),
           parcel66Text: ("your text here"),
           parcel57Text: ("your text here"),
           parcel58Text: ("your text here"),
           parcel59Text: ("your text here"),
           parcel67Text: ("your text here"),
           parcel68Text: ("your text here"),
           parcel69Text: ("your text here"),
           parcel70Text: ("your text here"),
           parcel71Text: ("your text here"),
           parcel72Text: ("your text here"),
           parcel73Text: ("your text here"),
           parcel74Text: ("your text here"),
           parcel75Text: ("your text here"),
           parcel76Text: ("your text here"),
           parcel77Text: ("your text here"),
           parcel78Text: ("your text here"),
           parcel79Text: ("your text here"),
           parcel80Text: ("your text here"),
           parcel81Text: ("your text here"),
           parcel82Text: ("your text here"),
           parcel83Text: ("your text here"),
           parcel84Text: ("your text here"),
           parcel85Text: ("your text here"),
           parcel86Text: ("your text here"),
           parcel87Text: ("your text here"),
           parcel88Text: ("your text here"),
           parcel89Text: ("your text here"),
           parcel90Text: ("your text here"),
           parcel91Text: ("your text here"),
           parcel92Text: ("your text here"),
           parcel93Text: ("your text here"),
           parcel94Text: ("your text here"),
           parcel95Text: ("your text here"),
           parcel96Text: ("your text here"),
           parcel97Text: ("your text here"),
           parcel98Text: ("your text here"),
           parcel99Text: ("your text here"),
           parcel100Text: ("your text here"),
           
        }
}