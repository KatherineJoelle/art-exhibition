
# Art Exhibition 

Display artwork like images, videos and 3D models in a metaverse art exhibition with a party area in the centre and a custom skybox. 

All artwork rotates to face the player and lowers to eye-level on approach. The scene is set up to play and pause videos automatically as the players gets closer to them.

Setup to deploy in worlds (DCL Name) and written in SDK6. 

Created for MVAW23.




## Demo

![art-exhibition-edge-uncle-ben](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/6199d4ce-5297-4e93-9ff2-15d48e77e213)



## Run Locally

Clone the project

```bash
  git clone https://github.com/KatherineJoelle/art-exhibition.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install -g decentraland
```

```bash
  npm install @dcl/ecs-scene-utils -B
```

Run scene

```bash
  dcl start
```

Deploy to Worlds (a DCL name)

```bash
  dcl deploy --target-content https://worlds-content-server.decentraland.org
```
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Features

- Display custom interactive images
- Display custom interactive videos
- Display custom interactive 3D models
- Artwork rotates to face the player
- Artwork lowers to eye-level on player approach
- Stage with screen and animated lights
- Custom hover text for each artwork
- Custom links for each artwork
- Deployable in worlds
- Scalable


## Usage/Examples

### Static Image Art 

Host images on a site like https://nft.storage/files/ and add the links in the corresponding parcel numbers.

```javascript
File: resources.ts

    serverImageLinks: {
        parcel1pic: new Texture("your link here"), // insert your image link here
    }
```

Adjust the image size if needed by changing the scale vector.

```javascript
File: images.ts

    createEntityWithBehavior(
     'Parcel 1',
     new Vector3(-55.8, 75, -56),
      new Vector3(3, 3, 3),   // Change scale here
      resources.serverImageLinks.parcel1pic,
      resources.serverImageLinks.parcel1pic,
      resources.artistLinks.parcelLink1,
     resources.hoverText.parcel1Text,
     parcel1StartPos,
     parcel1EndPos
    );

```


### Video Art 

Host videos on Vimeo Premium and add the .m3u8 links in the corresponding parcel numbers.

```javascript
File: resources.ts
    
    serverVideoLinks: {
            parcel14Video: new VideoClip("your link here.m3u8"), // insert your video link here 
   
```

Adjust the video size if needed by changing the scale vector.

```javascript
File: videos.ts

    createCustomEntity(
    'Parcel 76',
    new Vector3(24, 75, 56),
     new Vector3(2, 6, 1),      // Change scale here
    resources.serverVideoLinks.parcel76Video,
    resources.artistLinks.parcel76Link,
    resources.hoverText.parcel76Text,
     startPos76,
     endPos76,
    resources.serverImageLinks.parcel76Placeholder
    );

```

Add a placeholder image with the first frame of the video so it shows as a picture before the video is played.

```javascript
File: resources.ts
    
    parcel76Placeholder: new Texture ("your link here"), // insert a link to your placeholder image here 
   
```





### 3D Art 

Put any 3D models in the scene "models" folder and add the paths to the corresponding parcel numbers.

```javascript
File: resources.ts
    
    artwork: {
    parcel57Art: new GLTFShape('models/your model here.glb'), // insert path to 3d model
   
```

Adjust the model position and size if needed by changing the position and scale vectors.

```javascript
File: 3d-art.ts

    create3DArtworkEntity(
     "Parcel 57",
      new Vector3(40, 73.5, 24), // Change position
      new Vector3(3, 3, 3),      // Change scale
      resources.models.artwork.parcel57Art,
       resources.artistLinks.parcel57Link,
       resources.hoverText.parcel57Text,
       parcel57StartPos,
     parcel571EndPos
     );

```
## Screenshots

Layout guide with parcel numbers: 

![layoutTemplate](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/78345c62-e420-4c78-bd63-bf2563816bf3)

Scene Screenshots: 

![Artwork Screenshot Marc Francis](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/4429765a-f4f5-47b9-b4c9-93efa8e63843)

![Scene Edge Screenshot](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/55799120-4552-49df-953b-184f9fb866a2)

![Scene Overview Screenshot](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/a00fabbb-ff1b-47f0-9fe0-d9771d20a4ee)

![Scene Stage Screenshot](https://github.com/KatherineJoelle/art-exhibition/assets/53322457/69c80a08-af0e-4c7a-801f-663c11ea7cd9)




## Acknowledgements

Though the music and artwork from the MVAW23 Warm-Up Party are not included in this repository, the project couldn't have come to life without these amazing artists:

 - [Red Albert](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Marc Francis](https://github.com/matiassingers/awesome-readme)
 - [Geoff Robertson](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
  - [MetaLyss / FlawLyss](https://www.instagram.com/meta.lyss/)
 - [CJ Trax](https://twitter.com/DJTRAXNFT)
 - [ManaDaiquiri](https://twitter.com/ManaDaiquiriDCL)
  - [MJ](https://twitter.com/majocamcam)
 - [CK Bubbles](https://twitter.com/iamckbubbles)
 - [Awed Job](https://twitter.com/AwedJob)
  - [xyz.lB](https://twitter.com/rssquare1)
 - [Uncle Ben](https://twitter.com/bennyretired)
 - [srJH](https://twitter.com/srjhaidze)
  - [Saltï G](https://twitter.com/reinasalti)
 - [Zom](https://twitter.com/zom_eth)
 - [Katism](https://objkt.com/profile/tz1S35ewEKwms8unSiFJejqcVLdtPUggUgac/created)
  - [Shahin](https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/71975729801318550932790343850925633052120848579006819038187677641451927240705)
 - [Sinful Meatstick](https://twitter.com/SinfulMeatStick)
 - [Payam](https://twitter.com/payam_star)
  - [MaHa](https://twitter.com/Ma3dha)
 - [Hadi](https://www.instagram.com/sonay_hadi/)


A special thank you to [Kirzoz](https://twitter.com/Kirzoz3D) for help with the skybox. 
## Questions

If you have any questions about this repository feel free to reach out to KJ of Low Poly Models via [Twitter]("https://twitter.com/LowPolyModelsW"), [Instagram]("https://www.instagram.com/lowpolymodelsw/") or Discord. 

Visit [Low Poly Models World]("https://www.lowpolymodelsworld.com/") for building tutorials and to learn more about the metaverse services we provide. 


## License

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)

