import resources from "./resources";
import * as utils from '@dcl/ecs-scene-utils';


export function createVideoArtwork() {



 function createCustomEntity(
  name: string,
  position: Vector3,
  scale: Vector3,
  videoClip: VideoClip,
  artistLink: string,
  hoverText: string,
  startPos: [number, number, number], 
  endPos: [number, number, number],
  placeholderTexture: Texture
) {
  // Create VideoTexture and Material
  const videoTexture = new VideoTexture(videoClip);
  const videoMaterial = new Material();
  videoMaterial.albedoTexture = videoTexture;
  videoMaterial.roughness = 1;
  videoMaterial.specularIntensity = 0;
  videoMaterial.metallic = 0;
  videoMaterial.emissiveTexture = videoTexture;
  videoMaterial.emissiveColor = Color3.White();
  videoMaterial.emissiveIntensity = 0.9;

  // Create the entity
  const videoEntity = new Entity(name);
  videoEntity.addComponent(new PlaneShape());
  videoEntity.addComponent(
    new Transform({
      position: position,
      scale: scale,
    })
  );
  //videoEntity.addComponent(videoMaterial);
  engine.addEntity(videoEntity);
  videoEntity.addComponent(
    new OnPointerDown(() => {
      openExternalURL(artistLink);
    }, {
      hoverText: hoverText,
    })
  );

  videoEntity.addComponent(new Billboard(false, true, false));

  // Add these into a trigger box once we have final positions
  videoTexture.loop = true;

  // Placeholder material
  const placeholderMaterial = new Material();
  placeholderMaterial.albedoTexture = placeholderTexture;
  placeholderMaterial.emissiveTexture = placeholderTexture;
  placeholderMaterial.emissiveColor = Color3.White();
  placeholderMaterial.emissiveIntensity = 0.9;
  placeholderMaterial.roughness = 1;
  placeholderMaterial.specularIntensity = 0;
  videoEntity.addComponent(placeholderMaterial);


  let startPosVector = new Vector3(...startPos);
  let endPosVector = new Vector3(...endPos);



  // Trigger box
  const triggerVideoEntity = new Entity();
  const triggerVideoShape = new BoxShape();
  triggerVideoShape.withCollisions = false;
  triggerVideoShape.visible = false;
  triggerVideoEntity.addComponent(triggerVideoShape)
  triggerVideoEntity.addComponent(
    new Transform({
     position: position,
    })
  );

  const triggerVideoBox = new utils.TriggerBoxShape(
    new Vector3(14, 14, 14),
    new Vector3(0, 0, 0)
  );

  triggerVideoEntity.addComponent(
    new utils.TriggerComponent(triggerVideoBox, {
      onCameraEnter: () => {
        log('play video');
        videoEntity.addComponentOrReplace(videoMaterial);
        videoTexture.play();
        videoEntity.addComponentOrReplace(
          new utils.MoveTransformComponent(startPosVector, endPosVector, 2)
       );
      },
      onCameraExit: () => {
        log('stop video');
        videoTexture.playing = false;
        videoEntity.addComponentOrReplace(
        new utils.MoveTransformComponent(endPosVector, startPosVector, 2)
       
      );
      
      },
      //enableDebug: true
    })
  );

  log(`added trigger for ${name}`);
  engine.addEntity(triggerVideoEntity);

  return videoEntity;
}

/*
export function createVideoArtwork() {

}
*/
  
  
 
// Usage for Parcel 76
const startPos76: [number, number, number] = [24, 75, 56]
const endPos76: [number, number, number] = [24, 73.5, 56]

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


// Usage for Parcel 77
const startPos77: [number, number, number] = [40, 75, 56];
const endPos77: [number, number, number] = [40, 73.5, 56];

createCustomEntity(
  'Parcel 77',
  new Vector3(40, 75, 56),
  new Vector3(3.8 * 1.4, 4 * 1.4, 1),
  resources.serverVideoLinks.parcel77Video,
  resources.artistLinks.parcel77Link,
  resources.hoverText.parcel77Text,
  startPos77,
  endPos77,
  resources.serverImageLinks.parcel77Placeholder
);


// Usage for Parcel 14
const startPos14: [number, number, number] = [-8, 75, -40];
const endPos14: [number, number, number] = [-8, 73.5, -40];

createCustomEntity(
  'Parcel 14',
  new Vector3(-8, 75, -40),
  new Vector3(3.5 * 1.4, 2 * 1.4, 1),
  resources.serverVideoLinks.parcel14Video,
  resources.artistLinks.parcel14Link,
  resources.hoverText.parcel14Text,
  startPos14,
  endPos14,
  resources.serverImageLinks.parcel14Placeholder
);


// Usage for Parcel 24
const startPos24: [number, number, number] = [-8, 75, -24];
const endPos24: [number, number, number] = [-8, 73.5, -24];

createCustomEntity(
  'Parcel 24',
  new Vector3(-8, 75, -24),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverVideoLinks.parcel24Video,
  resources.artistLinks.parcel24Link,
  resources.hoverText.parcel24Text,
  startPos24,
  endPos24,
  resources.serverImageLinks.parcel24Placeholder
);


// Usage for Parcel 34
const startPos34: [number, number, number] = [-8, 75, -8];
const endPos34: [number, number, number] = [-8, 73.5, -8];

createCustomEntity(
  'Parcel 34',
  new Vector3(-8, 75, -8),
  new Vector3(3 * 1.4, 5 * 1.4, 1),
  resources.serverVideoLinks.parcel34Video,
  resources.artistLinks.parcel34Link,
  resources.hoverText.parcel34Text,
  startPos34,
  endPos34,
  resources.serverImageLinks.parcel34Placeholder
);



// Usage for Parcel 51
const startPos51: [number, number, number] = [-56, 75, 24];
const endPos51: [number, number, number] = [-56, 73.5, 24];

createCustomEntity(
  'Parcel 51',
  new Vector3(-56, 75, 24),
  new Vector3(3 * 1.4, 3 * 1.4, 1),
  resources.serverVideoLinks.parcel51Video,
  resources.artistLinks.parcel51Link,
  resources.hoverText.parcel51Text,
  startPos51,
  endPos51,
  resources.serverImageLinks.parcel51Placeholder
);


// Usage for Parcel 86
const startPos86: [number, number, number] = [24, 75, 72];
const endPos86: [number, number, number] = [24, 73.5, 72];

createCustomEntity(
  'Parcel 86',
  new Vector3(24, 75, 72),
  new Vector3(4 * 1.4, 4 * 1.4, 1),
  resources.serverVideoLinks.parcel86Video,
  resources.artistLinks.parcel86Link,
  resources.hoverText.parcel86Text,
  startPos86,
  endPos86,
  resources.serverImageLinks.parcel86Placeholder
);



// Usage for Parcel 52
const startPos52: [number, number, number] = [-40, 75, 24];
const endPos52: [number, number, number] = [-40, 73.5, 24];

createCustomEntity(
  'Parcel 52',
  new Vector3(-40, 75, 24),
  new Vector3(2.8 * 1.4, 4 * 1.4, 1),
  resources.serverVideoLinks.parcel52Video,
  resources.artistLinks.parcel52Link,
  resources.hoverText.parcel52Text,
  startPos52,
  endPos52,
  resources.serverImageLinks.parcel52Placeholder
);


// Usage for Parcel 61
const startPos61: [number, number, number] = [-56, 75, 40];
const endPos61: [number, number, number] = [-56, 73.5, 40];

createCustomEntity(
  'Parcel 61',
  new Vector3(-56, 75, 40),
  new Vector3(3 * 1.4, 3 * 1.4, 1),
  resources.serverVideoLinks.parcel61video,
  resources.artistLinks.parcel61Link,
  resources.hoverText.parcel61Text,
  startPos61,
  endPos61,
  resources.serverImageLinks.parcel61Placeholder
);



// Usage for Parcel 71
const startPos71: [number, number, number] = [-56, 75, 56];
const endPos71: [number, number, number] = [-56, 73.5, 56];

createCustomEntity(
  'Parcel 71',
  new Vector3(-56, 75, 56),
  new Vector3(3 * 1.4, 3 * 1.4, 1),
  resources.serverVideoLinks.parcel71Video,
  resources.artistLinks.parcel71Link,
  resources.hoverText.parcel71Text,
  startPos71,
  endPos71,
  resources.serverImageLinks.parcel71Placeholder
);


// Usage for Parcel 81
const startPos81: [number, number, number] = [-56, 75, 72];
const endPos81: [number, number, number] = [-56, 73.5, 72];

createCustomEntity(
  'Parcel 81',
  new Vector3(-56, 75, 72),
  new Vector3(3 * 1.4, 3.5 * 1.4, 1),
  resources.serverVideoLinks.parcel81Video,
  resources.artistLinks.parcel81Link,
  resources.hoverText.parcel81Text,
  startPos81,
  endPos81,
  resources.serverImageLinks.parcel81Placeholder
);


// Usage for Parcel 91
const startPos91: [number, number, number] = [-56, 75, 88];
const endPos91: [number, number, number] = [-56, 73.5, 88];

createCustomEntity(
  'Parcel 91',
  new Vector3(-56, 75, 88),
  new Vector3(3.75 * 1.4, 2.25 * 1.4, 1),
  resources.serverVideoLinks.parcel91Video,
  resources.artistLinks.parcel91Link,
  resources.hoverText.parcel91Text,
  startPos91,
  endPos91,
  resources.serverImageLinks.parcel91Placeholder
);


// Usage for Parcel 92
const startPos92: [number, number, number] = [-40, 74.5, 87.5];
const endPos92: [number, number, number] = [-40, 73.5, 87.5];

createCustomEntity(
  'Parcel 92',
  new Vector3(-40, 74.5, 87.5),
  new Vector3(3.75 * 1.2, 2.25 * 1.2, 1),
  resources.serverVideoLinks.parcel92Video,
  resources.artistLinks.parcel92Link,
  resources.hoverText.parcel92Text,
  startPos92,
  endPos92,
  resources.serverImageLinks.parcel92Placeholder
);

}