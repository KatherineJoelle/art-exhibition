
import resources from "./resources";
import * as utils from '@dcl/ecs-scene-utils';





export function create3Dartwork() {






  function create3DArtworkEntity(
    name: string,
    position: Vector3,
    scale: Vector3,
    gltfShape: GLTFShape,
    artistLink: string,
    hoverText: string,
    startPos: Vector3,
    endPos: Vector3
  ) {
    const artworkEntity = new Entity(name);
    artworkEntity.addComponent(gltfShape);
    artworkEntity.addComponent(new Transform({ position, scale }));
    artworkEntity.addComponent(new Billboard(false, true, false));
  
    artworkEntity.addComponent(new OnPointerDown(() => {
      openExternalURL(artistLink);
    }, { hoverText }));
  
    engine.addEntity(artworkEntity);
  
    // Trigger box
    const triggerBox = new Entity();
    triggerBox.addComponent(new BoxShape());
    triggerBox.getComponent(BoxShape).withCollisions = false;
    triggerBox.getComponent(BoxShape).visible = false;
    triggerBox.addComponent(new Transform({ position }));
  
    const triggerBoxShape = new utils.TriggerBoxShape(
      new Vector3(14, 14, 14),
      new Vector3(0, 0, 0)
    );
  
    triggerBox.addComponent(
      new utils.TriggerComponent(triggerBoxShape, {
        onCameraEnter: () => {
          log(`Lower artwork at ${position}`);
          artworkEntity.addComponentOrReplace(new utils.MoveTransformComponent(startPos, endPos, 2));
        },
        onCameraExit: () => {
          log(`Raise artwork at ${position}`);
          artworkEntity.addComponentOrReplace(new utils.MoveTransformComponent(endPos, startPos, 2));
        },
      })
    );
  
    log(`Added trigger box for position ${position}`);
    engine.addEntity(triggerBox);
  }
  








  
  // Usage example for Parcel 57
  const parcel57StartPos = new Vector3(40, 73.5, 24);
  const parcel571EndPos = new Vector3(40, 72.5, 24);


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



  // Parcel 58 (56, 73.5, 24)
  const parcel58StartPos = new Vector3(56, 73.5, 24);
  const parcel58EndPos = new Vector3(56, 72.5, 24);
  
  create3DArtworkEntity(
    "Parcel 58",
    new Vector3(56, 73.5, 24),
    new Vector3(2.2 * 1.4, 2.2 * 1.4, 2.2),
    resources.models.artwork.parcel58Art,
    resources.artistLinks.parcel58Link,
    resources.hoverText.parcel58Text,
    parcel58StartPos,
    parcel58EndPos
  );



  
// Parcel 59 (72, 73.5, 24)
const parcel59StartPos = new Vector3(72, 73.5, 24);
const parcel59EndPos = new Vector3(72, 72.5, 24);
  
create3DArtworkEntity(
  "Parcel 59",
  new Vector3(72, 73.5, 24),
  new Vector3(2.5 * 1.4, 2.5 * 1.4, 2.5),
  resources.models.artwork.parcel59Art,
  resources.artistLinks.parcel59Link,
  resources.hoverText.parcel59Text,
  parcel59StartPos,
  parcel59EndPos
);
  


// Parcel 67 (56, 73.5, 40)
const parcel67StartPos = new Vector3(40, 73.5, 40);
const parcel67EndPos = new Vector3(40, 72.5, 40);


create3DArtworkEntity(
  "Parcel 67",
  new Vector3(40, 73.5, 40),
  new Vector3(0.5 * 1.4, 0.5 * 1.4, 0.5 * 1.4),
  resources.models.artwork.parcel67Art,
  resources.artistLinks.parcel67Link,
  resources.hoverText.parcel67Text,
  parcel67StartPos,
  parcel67EndPos
);


// Parcel 68 (56, 73.5, 40)
const parcel68StartPos = new Vector3(56, 73.5, 40);
const parcel68EndPos = new Vector3(56, 72.5, 40);


create3DArtworkEntity(
  "Parcel 68",
  new Vector3(56.5, 70.4, 39.5),
  new Vector3(0.5 * 1.4, 0.5 * 1.4, 0.5 * 1.4),
  resources.models.artwork.parcel68Art,
  resources.artistLinks.parcel68Link,
  resources.hoverText.parcel68Text,
  parcel68StartPos,
  parcel68EndPos
);



// Parcel 82 (-40, 70, 72)
const parcel82StartPos = new Vector3(-40, 73.5, 72);
const parcel82EndPos = new Vector3(-40, 72.5, 72);


create3DArtworkEntity(
  "Parcel 82",
  new Vector3(-40, 70.27, 72),
  new Vector3(1.25 * 1.4, 1.25 * 1.4, 1.25),
  resources.models.artwork.parcel82Art,
  resources.artistLinks.parcel82Link,
  resources.hoverText.parcel82Text,
  parcel82StartPos,
  parcel82EndPos
);
















}