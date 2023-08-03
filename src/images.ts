

import resources from "./resources";
import * as utils from '@dcl/ecs-scene-utils';


export function createImageArtwork() {



  function createEntityWithBehavior(name: string, position: Vector3, scale: Vector3, albedoTexture: Texture, emissiveTexture: Texture, link: string, hoverText: string, startPos: [number, number, number], endPos: [number, number, number]) {
    const entity = new Entity(name);
    
    const planeShparcel35 = new PlaneShape();
    entity.addComponent(planeShparcel35);
    
    const material = new Material();
    material.albedoTexture = albedoTexture;
    material.emissiveTexture = emissiveTexture;
    material.emissiveColor = Color3.White();
    material.emissiveIntensity = 0.9;
    material.roughness = 1;
    material.specularIntensity = 0;
    entity.addComponent(material);
    
    const transform = new Transform({
        position: position,
        rotation: Quaternion.Euler(0, 0, 0),
        scale: scale
    });
    entity.addComponent(transform);
    
    entity.addComponent(new Billboard(false, true, false));
    engine.addEntity(entity);
    
    entity.addComponent(new OnPointerDown(() => {
        openExternalURL(link);
    }, {
        hoverText: hoverText
    }));
    
    let startPosVector = new Vector3(...startPos);
    let endPosVector = new Vector3(...endPos);
    
    const triggerBoxEntity = new Entity();
    const triggerShparcel35 = new BoxShape();
    triggerShparcel35.withCollisions = false;
    triggerShparcel35.visible = false;
    triggerBoxEntity.addComponent(triggerShparcel35);
    triggerBoxEntity.addComponent(new Transform({
        position: position
    }));
    
    const triggerBox = new utils.TriggerBoxShape(new Vector3(14, 14, 14), new Vector3(0, 0, 0));
    
    triggerBoxEntity.addComponent(new utils.TriggerComponent(triggerBox, {
        onCameraEnter: () => {
            log('lower trigger');
            entity.addComponentOrReplace(new utils.MoveTransformComponent(startPosVector, endPosVector, 2));
        },
        onCameraExit: () => {
            log('raise trigger');
            entity.addComponentOrReplace(new utils.MoveTransformComponent(endPosVector, startPosVector, 2));
        },
        // enableDeparcel32: true
    }));
    
    log(`added trigger for ${name}`);
    engine.addEntity(triggerBoxEntity);
}







/// Artwork (2D Images)



// Parcel 72 (-40, 70, 56)
const Parcel72StartPos: [number, number, number] = [-40, 75, 56];
const Parcel72EndPos: [number, number, number] = [-40, 73.5, 56];

createEntityWithBehavior(
  'Parcel 72', new Vector3(-40, 75, 56), 
  new Vector3(4, 4, 4), 
  resources.serverImageLinks.parcel72pic, 
  resources.serverImageLinks.parcel72pic, 
  resources.artistLinks.parcel72Link, 
  resources.hoverText.parcel72Text, 
  Parcel72StartPos, 
  Parcel72EndPos);


// Parcel 1 (-55.8, 73.5, -56)
const parcel1StartPos: [number, number, number] = [-55.8, 75, -56];
const parcel1EndPos: [number, number, number] = [-55.8, 73.5, -56];

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


// Parcel 2 (-40, 70, -56)
const parcel2StartPos: [number, number, number] = [-40, 75, -56];
const parcel2EndPos: [number, number, number] = [-40, 73.5, -56];

createEntityWithBehavior(
  'Parcel 2',
  new Vector3(-40, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel2pic,
  resources.serverImageLinks.parcel2pic,
  resources.artistLinks.parcelLink2,
  resources.hoverText.parcel2Text,
  parcel2StartPos,
  parcel2EndPos
);



// Parcel 3 (-24, 70, -56)
const parcel3StartPos: [number, number, number] = [-24, 75, -56];
const parcel3EndPos: [number, number, number] = [-24, 73.5, -56];

createEntityWithBehavior(
  'Parcel 3',
  new Vector3(-24, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel3pic,
  resources.serverImageLinks.parcel3pic,
  resources.artistLinks.parcelLink3,
  resources.hoverText.parcel3Text,
  parcel3StartPos,
  parcel3EndPos
);


// Parcel 4 (-8, 73.5, -56)
const parcel4StartPos: [number, number, number] = [-8, 75, -56];
const parcel4EndPos: [number, number, number] = [-8, 73.5, -56];

createEntityWithBehavior(
  'Parcel 4',
  new Vector3(-8, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel4pic,
  resources.serverImageLinks.parcel4pic,
  resources.artistLinks.parcelLink4,
  resources.hoverText.parcel4Text,
  parcel4StartPos,
  parcel4EndPos
);


// Parcel 5 (8, 73.5, -56)
const parcel5StartPos: [number, number, number] = [8, 75, -56];
const parcel5EndPos: [number, number, number] = [8, 73.5, -56];

createEntityWithBehavior(
  'Parcel 5',
  new Vector3(8, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel5pic,
  resources.serverImageLinks.parcel5pic,
  resources.artistLinks.parcelLink5,
  resources.hoverText.parcel5Text,
  parcel5StartPos,
  parcel5EndPos
);


// Parcel 6 (24, 73.5, -56)
const parcel6StartPos: [number, number, number] = [24, 75, -56];
const parcel6EndPos: [number, number, number] = [24, 73.5, -56];

createEntityWithBehavior(
  'Parcel 6',
  new Vector3(24, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel6pic,
  resources.serverImageLinks.parcel6pic,
  resources.artistLinks.parcelLink6,
  resources.hoverText.parcel6Text,
  parcel6StartPos,
  parcel6EndPos
);

// Parcel 7 (40, 73.5, -56)
const parcel7StartPos: [number, number, number] = [40, 75, -56];
const parcel7EndPos: [number, number, number] = [40, 73.5, -56];

createEntityWithBehavior(
  'Parcel 7',
  new Vector3(40, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel7pic,
  resources.serverImageLinks.parcel7pic,
  resources.artistLinks.parcelLink7,
  resources.hoverText.parcel7Text,
  parcel7StartPos,
  parcel7EndPos
);



// Parcel 8 (56, 73.5, -56)
const parcel8StartPos: [number, number, number] = [56, 75, -56];
const parcel8EndPos: [number, number, number] = [56, 73.5, -56];

createEntityWithBehavior(
  'Parcel 8',
  new Vector3(56, 75, -56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel8pic,
  resources.serverImageLinks.parcel8pic,
  resources.artistLinks.parcelLink8,
  resources.hoverText.parcel8Text,
  parcel8StartPos,
  parcel8EndPos
);

// Parcel 11 (-56, 70, -40)
const parcel11StartPos: [number, number, number] = [-56, 75, -40];
const parcel11EndPos: [number, number, number] = [-56, 73.5, -40];

createEntityWithBehavior(
  'Parcel 11',
  new Vector3(-56, 75, -40),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel11pic,
  resources.serverImageLinks.parcel11pic,
  resources.artistLinks.parcel11Link,
  resources.hoverText.parcel11Text,
  parcel11StartPos,
  parcel11EndPos
);

// Parcel 12 (-40, 70, -40)
const parcel12StartPos: [number, number, number] = [-40, 75, -40];
const parcel12EndPos: [number, number, number] = [-40, 73.5, -40];

createEntityWithBehavior(
  'Parcel 12',
  new Vector3(-40, 75, -40),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel12pic,
  resources.serverImageLinks.parcel12pic,
  resources.artistLinks.parcel12Link,
  resources.hoverText.parcel12Text,
  parcel12StartPos,
  parcel12EndPos
);



// Parcel 13 (-24, 70, -40)
const parcel13StartPos: [number, number, number] = [-24, 75, -40];
const parcel13EndPos: [number, number, number] = [-24, 73.5, -40];

createEntityWithBehavior(
  'Parcel 13',
  new Vector3(-24, 75, -40),
  new Vector3(3.5 * 1.4, 4.5 * 1.4, 1),
  resources.serverImageLinks.parcel13pic,
  resources.serverImageLinks.parcel13pic,
  resources.artistLinks.parcel13Link,
  resources.hoverText.parcel13Text,
  parcel13StartPos,
  parcel13EndPos
);

// Parcel 15 (8, 70, -40)
const parcel15StartPos: [number, number, number] = [8, 75, -40];
const parcel15EndPos: [number, number, number] = [8, 73.5, -40];

createEntityWithBehavior(
  'Parcel 15',
  new Vector3(8, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel15pic,
  resources.serverImageLinks.parcel15pic,
  resources.artistLinks.parcel15Link,
  resources.hoverText.parcel15Text,
  parcel15StartPos,
  parcel15EndPos
);

// Parcel 21 (-56, 70, -24)
const parcel21StartPos: [number, number, number] = [-56, 75, -24];
const parcel21EndPos: [number, number, number] = [-56, 73.5, -24];

createEntityWithBehavior(
  'Parcel 21',
  new Vector3(-56, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel21pic,
  resources.serverImageLinks.parcel21pic,
  resources.artistLinks.parcel21Link,
  resources.hoverText.parcel21Text,
  parcel21StartPos,
  parcel21EndPos
);


// Parcel 22 (-40, 70, -24)
const parcel22StartPos: [number, number, number] = [-40, 75, -24];
const parcel22EndPos: [number, number, number] = [-40, 73.5, -24];

createEntityWithBehavior(
  'Parcel 22',
  new Vector3(-40, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel22pic,
  resources.serverImageLinks.parcel22pic,
  resources.artistLinks.parcel22Link,
  resources.hoverText.parcel22Text,
  parcel22StartPos,
  parcel22EndPos
);

// Parcel 23 (-24, 70, -24)
const parcel23StartPos: [number, number, number] = [-24, 75, -24];
const parcel23cityEndPos: [number, number, number] = [-24, 73.5, -24];

createEntityWithBehavior(
  'Parcel 23',
  new Vector3(-24, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel23pic,
  resources.serverImageLinks.parcel23pic,
  resources.artistLinks.parcel23Link,
  resources.hoverText.parcel23Text,
  parcel23StartPos,
  parcel23cityEndPos
);

// Parcel 47 (40, 73.5, 8)
const parcel47StartPos: [number, number, number] = [40, 75, 8];
const parcel47EndPos: [number, number, number] = [40, 73.5, 8];

createEntityWithBehavior(
  'Parcel 47',
  new Vector3(40, 75, 8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel47pic,
  resources.serverImageLinks.parcel47pic,
  resources.artistLinks.parcel47Link,
  resources.hoverText.parcel47Text,
  parcel47StartPos,
  parcel47EndPos
);


// Parcel 48 (56, 73.5, 8)
const parcel48StartPos: [number, number, number] = [56, 75, 8];
const parcel48EndPos: [number, number, number] = [56, 73.5, 8];

createEntityWithBehavior(
  'Parcel 48',
  new Vector3(56, 75, 8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel48pic,
  resources.serverImageLinks.parcel48pic,
  resources.artistLinks.parcel48Link,
  resources.hoverText.parcel48Text,
  parcel48StartPos,
  parcel48EndPos
);

// Parcel 49 (72, 73.5, 8)
const parcel49StartPos: [number, number, number] = [72, 75, 8];
const parcel49EndPos: [number, number, number] = [72, 73.5, 8];

createEntityWithBehavior(
  'Parcel 49',
  new Vector3(72, 75, 8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel49pic,
  resources.serverImageLinks.parcel49pic,
  resources.artistLinks.parcel49Link,
  resources.hoverText.parcel49Text,
  parcel49StartPos,
  parcel49EndPos
);

// Parcel 50 (88, 73.5, 8)
const parcel50StartPos: [number, number, number] = [88, 75, 8];
const parcel50EndPos: [number, number, number] = [88, 73.5, 8];

createEntityWithBehavior(
  'Parcel 50',
  new Vector3(88, 75, 8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel50pic,
  resources.serverImageLinks.parcel50pic,
  resources.artistLinks.parcel50Link,
  resources.hoverText.parcel50Text,
  parcel50StartPos,
  parcel50EndPos
);


// Parcel 36 (24, 73.5, -8)
const parcel36StartPos: [number, number, number] = [24, 75, -8];
const parcel36EndPos: [number, number, number] = [24, 73.5, -8];

createEntityWithBehavior(
  'Parcel 36',
  new Vector3(24, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel36pic,
  resources.serverImageLinks.parcel36pic,
  resources.artistLinks.parcel36Link,
  resources.hoverText.parcel36Text,
  parcel36StartPos,
  parcel36EndPos
);

// Parcel 37 (40, 73.5, -8)
const parcel37StartPos: [number, number, number] = [40, 75, -8];
const parcel37EndPos: [number, number, number] = [40, 73.5, -8];

createEntityWithBehavior(
  'Parcel 37',
  new Vector3(40, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel37pic,
  resources.serverImageLinks.parcel37pic,
  resources.artistLinks.parcel37Link,
  resources.hoverText.parcel37Text,
  parcel37StartPos,
  parcel37EndPos
);

// Parcel 38 (56, 73.5, -8)
const parcel38StartPos: [number, number, number] = [56, 75, -8];
const parcel38EndPos: [number, number, number] = [56, 73.5, -8];

createEntityWithBehavior(
  'Parcel 38',
  new Vector3(56, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel38pic,
  resources.serverImageLinks.parcel38pic,
  resources.artistLinks.parcel38Link,
  resources.hoverText.parcel38Text,
  parcel38StartPos,
  parcel38EndPos
);


// Parcel 39 (72, 73.5, -8)
const parcel39StartPos: [number, number, number] = [72, 75, -8];
const parcel39EndPos: [number, number, number] = [72, 73.5, -8];

createEntityWithBehavior(
  'Parcel 39',
  new Vector3(72, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel39pic,
  resources.serverImageLinks.parcel39pic,
  resources.artistLinks.parcel39Link,
  resources.hoverText.parcel39Text,
  parcel39StartPos,
  parcel39EndPos
);

// Parcel 40 (88, 73.5, -8)
const parcel40StartPos: [number, number, number] = [88, 75, -8];
const parcel40EndPos: [number, number, number] = [88, 73.5, -8];

createEntityWithBehavior(
  'Parcel 40',
  new Vector3(88, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel40pic,
  resources.serverImageLinks.parcel40pic,
  resources.artistLinks.parcel40Link,
  resources.hoverText.parcel40Text,
  parcel40StartPos,
  parcel40EndPos
);

// Parcel 26 (24, 73.5, -24)
const parcel26StartPos: [number, number, number] = [24, 75, -24];
const parcel26EndPos: [number, number, number] = [24, 73.5, -24];

createEntityWithBehavior(
  'Parcel 26',
  new Vector3(24, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel26pic,
  resources.serverImageLinks.parcel26pic,
  resources.artistLinks.parcel26Link,
  resources.hoverText.parcel26Text,
  parcel26StartPos,
  parcel26EndPos
);

// Parcel 27 (40, 73.5, -24)
const parcel27StartPos: [number, number, number] = [40, 75, -24];
const parcel27EndPos: [number, number, number] = [40, 73.5, -24];

createEntityWithBehavior(
  'Parcel 27',
  new Vector3(40, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel27pic,
  resources.serverImageLinks.parcel27pic,
  resources.artistLinks.parcel27link,
  resources.hoverText.parcel27Text,
  parcel27StartPos,
  parcel27EndPos
);

// Parcel 28 (56, 73.5, -24)
const parcel28StartPos: [number, number, number] = [56, 75, -24];
const parcel28EndPos: [number, number, number] = [56, 73.5, -24];

createEntityWithBehavior(
  'Parcel 28',
  new Vector3(56, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel28pic,
  resources.serverImageLinks.parcel28pic,
  resources.artistLinks.parcel28Link,
  resources.hoverText.parcel28Text,
  parcel28StartPos,
  parcel28EndPos
);

// Parcel 29 (72, 73.5, -24)
const parcel29StartPos: [number, number, number] = [72, 75, -24];
const parcel29EndPos: [number, number, number] = [72, 73.5, -24];

createEntityWithBehavior(
  'Parcel 29',
  new Vector3(72, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel29pic,
  resources.serverImageLinks.parcel29pic,
  resources.artistLinks.parcel29Link,
  resources.hoverText.parcel29Text,
  parcel29StartPos,
  parcel29EndPos
);

// Parcel 30 (88, 73.5, -24)
const parcel30StartPos: [number, number, number] = [88, 75, -24];
const parcel30EndPos: [number, number, number] = [88, 73.5, -24];

createEntityWithBehavior(
  'Parcel 30',
  new Vector3(88, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel30pic,
  resources.serverImageLinks.parcel30pic,
  resources.artistLinks.parcel30Link,
  resources.hoverText.parcel30Text,
  parcel30StartPos,
  parcel30EndPos
);



// Parcel 16 (24, 73.5, -40)
const parcel16StartPos: [number, number, number] = [24, 75, -40];
const parcel16EndPos: [number, number, number] = [24, 73.5, -40];

createEntityWithBehavior(
  'Parcel 16',
  new Vector3(24, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel16pic,
  resources.serverImageLinks.parcel16pic,
  resources.artistLinks.parcel16Link,
  resources.hoverText.parcel16Text,
  parcel16StartPos,
  parcel16EndPos
);

// Parcel 17 (40, 73.5, -40)
const parcel17StartPos: [number, number, number] = [40, 75, -40];
const parcel17EndPos: [number, number, number] = [40, 73.5, -40];

createEntityWithBehavior(
  'Parcel 17',
  new Vector3(40, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel17pic,
  resources.serverImageLinks.parcel17pic,
  resources.artistLinks.parcel17Link,
  resources.hoverText.parcel17Text,
  parcel17StartPos,
  parcel17EndPos
);

// Parcel 18 (56, 73.5, -40)
const parcel18StartPos: [number, number, number] = [56, 75, -40];
const parcel18EndPos: [number, number, number] = [56, 73.5, -40];

createEntityWithBehavior(
  'Parcel 18',
  new Vector3(56, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel18pic,
  resources.serverImageLinks.parcel18pic,
  resources.artistLinks.parcel18Link,
  resources.hoverText.parcel18Text,
  parcel18StartPos,
  parcel18EndPos
);

// Parcel 19 (72, 73.5, -40)
const parcel19StartPos: [number, number, number] = [72, 75, -40];
const parcel19EndPos: [number, number, number] = [72, 73.5, -40];

createEntityWithBehavior(
  'Parcel 19',
  new Vector3(72, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel19pic,
  resources.serverImageLinks.parcel19pic,
  resources.artistLinks.parcel19Link,
  resources.hoverText.parcel19Text,
  parcel19StartPos,
  parcel19EndPos
);



// Parcel 20 (88, 73.5, -40)
const parcel20StartPos: [number, number, number] = [88, 75, -40];
const parcel20EndPos: [number, number, number] = [88, 73.5, -40];

createEntityWithBehavior(
  'Parcel 20',
  new Vector3(88, 75, -40),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel20pic,
  resources.serverImageLinks.parcel20pic,
  resources.artistLinks.parcel20Link,
  resources.hoverText.parcel20Text,
  parcel20StartPos,
  parcel20EndPos
);

// Parcel 9 (72, 73.5, -56)
const parcel9StartPos: [number, number, number] = [72, 75, -56];
const parcel9EndPos: [number, number, number] = [72, 73.5, -56];

createEntityWithBehavior(
  'Parcel 9',
  new Vector3(72, 75, -56),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel9pic,
  resources.serverImageLinks.parcel9pic,
  resources.artistLinks.parcel9Link,
  resources.hoverText.parcel9Text,
  parcel9StartPos,
  parcel9EndPos
);

// Parcel 10 (88, 73.5, -56)
const parcel10StartPos: [number, number, number] = [88, 75, -56];
const parcel10EndPos: [number, number, number] = [88, 73.5, -56];

createEntityWithBehavior(
  'Parcel 10',
  new Vector3(88, 75, -56),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel10pic,
  resources.serverImageLinks.parcel10pic,
  resources.artistLinks.parcel10Link,
  resources.hoverText.parcel10Text,
  parcel10StartPos,
  parcel10EndPos
);

// Parcel 25 (8, 70, -24)
const parcel25StartPos: [number, number, number] = [8, 75, -24];
const parcel25EndPos: [number, number, number] = [8, 73.5, -24];

createEntityWithBehavior(
  'Parcel 25',
  new Vector3(8, 75, -24),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel25pic,
  resources.serverImageLinks.parcel25pic,
  resources.artistLinks.parcel25Link,
  resources.hoverText.parcel25Text,
  parcel25StartPos,
  parcel25EndPos
);

// Parcel 31 (-56, 70, -8)
const parcel31StartPos: [number, number, number] = [-56, 75, -8];
const parcel31EndPos: [number, number, number] = [-56, 73.5, -8];

createEntityWithBehavior(
  'Parcel 31',
  new Vector3(-56, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel31pic,
  resources.serverImageLinks.parcel31pic,
  resources.artistLinks.parcel31Link,
  resources.hoverText.parcel31Text,
  parcel31StartPos,
  parcel31EndPos
);

// Parcel 32 (-40, 70, -8)
const parcel32StartPos: [number, number, number] = [-40, 75, -8];
const parcel32EndPos: [number, number, number] = [-40, 73.5, -8];

createEntityWithBehavior(
  'Parcel 32',
  new Vector3(-40, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel32pic, 
  resources.serverImageLinks.parcel32pic,
  resources.artistLinks.parcel32Link,
  resources.hoverText.parcel32Text,
  parcel32StartPos,
  parcel32EndPos
);

// Parcel 33 (-24, 70, -8)
const parcel33StartPos: [number, number, number] = [-24, 75, -8];
const parcel33EndPos: [number, number, number] = [-24, 73.5, -8];

createEntityWithBehavior(
  'Parcel 33',
  new Vector3(-24, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel33pic,
  resources.serverImageLinks.parcel33pic,
  resources.artistLinks.parcel33Link,
  resources.hoverText.parcel33Text,
  parcel33StartPos,
  parcel33EndPos
);

// Parcel 35 (8, 70, -8)
const parcel35StartPos: [number, number, number] = [8, 75, -8];
const parcel35EndPos: [number, number, number] = [8, 73.5, -8];

createEntityWithBehavior(
  'Parcel 35',
  new Vector3(8, 75, -8),
  new Vector3(3.6 * 1.4, 3.6 * 1.4, 1),
  resources.serverImageLinks.parcel35pic, //zomparcel35
  resources.serverImageLinks.parcel35pic,
  resources.artistLinks.parcel35Link,
  resources.hoverText.parcel35Text,
  parcel35StartPos,
  parcel35EndPos
);




// Parcel 41 (-56, 70, 8)
const parcel41StartPos: [number, number, number] = [-56, 75, 8];
const parcel41EndPos: [number, number, number] = [-56, 73.5, 8];

createEntityWithBehavior(
  'Parcel 41',
  new Vector3(-56, 75, 8),
  new Vector3(2.8 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel41pic, 
  resources.serverImageLinks.parcel41pic,
  resources.artistLinks.parcel41Link,
  resources.hoverText.parcel41Text,
  parcel41StartPos,
  parcel41EndPos
);

// Parcel 42 (-40, 70, 8)
const parcel42StartPos: [number, number, number] = [-40, 75, 8];
const parcel42EndPos: [number, number, number] = [-40, 73.5, 8];

createEntityWithBehavior(
  'Parcel 42',
  new Vector3(-40, 75, 8),
  new Vector3(2.8 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel42pic,
  resources.serverImageLinks.parcel42pic,
  resources.artistLinks.parcel42Link,
  resources.hoverText.parcel42Text,
  parcel42StartPos,
  parcel42EndPos
);

// Parcel 43 (-24, 70, 8)
const parcel43StartPos: [number, number, number] = [-24, 75, 8];
const parcel43EndPos: [number, number, number] = [-24, 73.5, 8];

createEntityWithBehavior(
  'Parcel 43',
  new Vector3(-24, 75, 8),
  new Vector3(2.8 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel43pic,
  resources.serverImageLinks.parcel43pic,
  resources.artistLinks.parcel43Link,
  resources.hoverText.parcel43Text,
  parcel43StartPos,
  parcel43EndPos
);

// Parcel 44 (-8, 70, 8)
const parcel44StartPos: [number, number, number] = [-8, 75, 8];
const parcel44EndPos: [number, number, number] = [-8, 73.5, 8];

createEntityWithBehavior(
  'Parcel 44',
  new Vector3(-8, 75, 8),
  new Vector3(2.8 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel44pic,
  resources.serverImageLinks.parcel44pic,
  resources.artistLinks.parcel44Link,
  resources.hoverText.parcel44Text,
  parcel44StartPos,
  parcel44EndPos
);



// Parcel 66 (24, 73.5, 40)
const parcel66StartPos: [number, number, number] = [88, 75, 24];
const parcel66EndPos: [number, number, number] = [88, 73.5, 24];

createEntityWithBehavior(
  'Parcel 66',
  new Vector3(88, 75, 24),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel66pic,
  resources.serverImageLinks.parcel66pic,
  resources.artistLinks.parcel66Link,
  resources.hoverText.parcel66Text,
  parcel66StartPos,
  parcel66EndPos
);

// Parcel 69 (72, 73.5, 40)
const parcel69StartPos: [number, number, number] = [24, 75, 40];
const parcel69EndPos: [number, number, number] = [24, 73.5, 40];

createEntityWithBehavior(
  'Parcel 69',
  new Vector3(24, 75, 40),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel69pic,
  resources.serverImageLinks.parcel69pic,
  resources.artistLinks.parcel69Link,
  resources.hoverText.parcel69Text,
  parcel69StartPos,
  parcel69EndPos
);

// Parcel 70 (88, 73.5, 40)
const parcel70StartPos: [number, number, number] = [72, 75, 40];
const parcel70EndPos: [number, number, number] = [72, 73.5, 40];

createEntityWithBehavior(
  'Parcel 70',
  new Vector3(72, 75, 40),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel70pic,
  resources.serverImageLinks.parcel70pic,
  resources.artistLinks.parcel70Link,
  resources.hoverText.parcel70Text,
  parcel70StartPos,
  parcel70EndPos
);



// Parcel 53 (-24, 70, 24)
const parcel53StartPos: [number, number, number] = [-24, 75, 24];
const parcel53EndPos: [number, number, number] = [-24, 73.5, 24];

createEntityWithBehavior(
  'Parcel 53',
  new Vector3(-24, 75, 24),
  new Vector3(2.5 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel53pic,
  resources.serverImageLinks.parcel53pic,
  resources.artistLinks.parcel53Link,
  resources.hoverText.parcel53Text,
  parcel53StartPos,
  parcel53EndPos
);

// Parcel 80 (88, 73.5, 56)
const parcel80StartPos: [number, number, number] = [88, 75, 56];
const parcel80EndPos: [number, number, number] = [88, 73.5, 56];

createEntityWithBehavior(
  'Parcel 80',
  new Vector3(88, 75, 56),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel80pic,
  resources.serverImageLinks.parcel80pic,
  resources.artistLinks.parcel80Link,
  resources.hoverText.parcel80Text,
  parcel80StartPos,
  parcel80EndPos
);

// Parcel 79 (72, 73.5, 56)
const parcel79StartPos: [number, number, number] = [72, 75, 56];
const parcel79EndPos: [number, number, number] = [72, 73.5, 56];

createEntityWithBehavior(
  'Parcel 79',
  new Vector3(72, 75, 56),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel79pic,
  resources.serverImageLinks.parcel79pic,
  resources.artistLinks.parcel79Link,
  resources.hoverText.parcel79Text,
  parcel79StartPos,
  parcel79EndPos
);

// Parcel 78 (56, 73.5, 56)
const parcel78StartPos: [number, number, number] = [56, 75, 56];
const parcel78EndPos: [number, number, number] = [56, 73.5, 56];

createEntityWithBehavior(
  'Parcel 78',
  new Vector3(56, 75, 56),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel78pic,
  resources.serverImageLinks.parcel78pic,
  resources.artistLinks.parcel78Link,
  resources.hoverText.parcel78Text,
  parcel78StartPos,
  parcel78EndPos
);




// Parcel 62 (-40, 70, 40)
const parcel62StartPos: [number, number, number] = [-40, 75, 40];
const parcel62EndPos: [number, number, number] = [-40, 73.5, 40];

createEntityWithBehavior(
  'Parcel 62',
  new Vector3(-40, 75, 40),
  new Vector3(3.5 * 1.4, 3.5 * 1.4, 1),
  resources.serverImageLinks.parcel62pic,
  resources.serverImageLinks.parcel62pic,
  resources.artistLinks.parcel62Link,
  resources.hoverText.parcel62Text,
  parcel62StartPos,
  parcel62EndPos
);

// Parcel 63 (-24, 70, 40)
const parcel63StartPos: [number, number, number] = [-24, 75, 40];
const parcel63EndPos: [number, number, number] = [-24, 73.5, 40];

createEntityWithBehavior(
  'Parcel 63',
  new Vector3(-24, 75, 40),
  new Vector3(2.5 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel63pic,
  resources.serverImageLinks.parcel63pic,
  resources.artistLinks.parcel63Link,
  resources.hoverText.parcel63Text,
  parcel63StartPos,
  parcel63EndPos
);

// Parcel 64 (-8, 70, 40)
const parcel64StartPos: [number, number, number] = [-8, 75, 40];
const parcel64EndPos: [number, number, number] = [-8, 73.5, 40];

createEntityWithBehavior(
  'Parcel 64',
  new Vector3(-8, 75, 40),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel64pic,
  resources.serverImageLinks.parcel64pic,
  resources.artistLinks.parcel64Link,
  resources.hoverText.parcel64Text,
  parcel64StartPos,
  parcel64EndPos
);



// Parcel 65 (8, 70, 40)
const parcel65StartPos: [number, number, number] = [8, 75, 40];
const parcel65EndPos: [number, number, number] = [8, 73.5, 40];

createEntityWithBehavior(
  'Parcel 65',
  new Vector3(8, 75, 40),
  new Vector3(2.5 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel65pic,
  resources.serverImageLinks.parcel65pic,
  resources.artistLinks.parcel65Link,
  resources.hoverText.parcel65Text,
  parcel65StartPos,
  parcel65EndPos
);



// Parcel 73 (-24, 70, 56)
const parcel73StartPos: [number, number, number] = [-24, 75, 56];
const parcel73EndPos: [number, number, number] = [-24, 73.5, 56];

createEntityWithBehavior(
  'Parcel 73',
  new Vector3(-24, 75, 56),
  new Vector3(2.5 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel73pic,
  resources.serverImageLinks.parcel73pic,
  resources.artistLinks.parcel73Link,
  resources.hoverText.parcel73Text,
  parcel73StartPos,
  parcel73EndPos
);


// Parcel 74 (-8, 70, 56)
const parcel74StartPos: [number, number, number] = [-8, 75, 56];
const parcel74EndPos: [number, number, number] = [-8, 73.5, 56];

createEntityWithBehavior(
  'Parcel 74',
  new Vector3(-8, 75, 56),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel74pic,
  resources.serverImageLinks.parcel74pic,
  resources.artistLinks.parcel74Link,
  resources.hoverText.parcel74Text,
  parcel74StartPos,
  parcel74EndPos
);


// Parcel 75 (8, 70, 56)
const parcel75StartPos: [number, number, number] = [8, 75, 56];
const parcel75EndPos: [number, number, number] = [8, 73.5, 56];

createEntityWithBehavior(
  'Parcel 75',
  new Vector3(8, 75, 56),
  new Vector3(4 * 1.4, 2.8 * 1.4, 1),
  resources.serverImageLinks.parcel75pic,
  resources.serverImageLinks.parcel75pic,
  resources.artistLinks.parcel75Link,
  resources.hoverText.parcel75Text,
  parcel75StartPos,
  parcel75EndPos
);


// Parcel 83 (-24, 70, 72)
const parcel83StartPos: [number, number, number] = [-24, 75, 72];
const parcel83EndPos: [number, number, number] = [-24, 73.5, 72];

createEntityWithBehavior(
  'Parcel 83',
  new Vector3(-24, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel83pic,
  resources.serverImageLinks.parcel83pic,
  resources.artistLinks.parcel83Link,
  resources.hoverText.parcel83Text,
  parcel83StartPos,
  parcel83EndPos
);



// Parcel 84 (-8, 70, 72)
const parcel84StartPos: [number, number, number] = [-8, 75, 72];
const parcel84EndPos: [number, number, number] = [-8, 73.5, 72];

createEntityWithBehavior(
  'Parcel 84',
  new Vector3(-8, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel84pic,
  resources.serverImageLinks.parcel84pic,
  resources.artistLinks.parcel84Link,
  resources.hoverText.parcel84Text,
  parcel84StartPos,
  parcel84EndPos
);


// Parcel 85 (8, 70, 72)
const parcel85StartPos: [number, number, number] = [8, 75, 72];
const parcel85EndPos: [number, number, number] = [8, 73.5, 72];

createEntityWithBehavior(
  'Parcel 85',
  new Vector3(8, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel85pic,
  resources.serverImageLinks.parcel85pic,
  resources.artistLinks.parcel85Link,
  resources.hoverText.parcel85Text,
  parcel85StartPos,
  parcel85EndPos
);


// Parcel 93 (-24, 70, 88)
const parcel93StartPos: [number, number, number] = [-24, 75, 88];
const parcel93EndPos: [number, number, number] = [-24, 73.5, 88];

createEntityWithBehavior(
  'Parcel 93',
  new Vector3(-24, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel93pic,
  resources.serverImageLinks.parcel93pic,
  resources.artistLinks.parcel93Link,
  resources.hoverText.parcel93Text,
  parcel93StartPos,
  parcel93EndPos
);


// Parcel 94 (-8, 70, 88)
const parcel94StartPos: [number, number, number] = [-8, 75, 88];
const parcel94EndPos: [number, number, number] = [-8, 73.5, 88];

createEntityWithBehavior(
  'Parcel 94',
  new Vector3(-8, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel94pic,
  resources.serverImageLinks.parcel94pic,
  resources.artistLinks.parcel94Link,
  resources.hoverText.parcel94Text,
  parcel94StartPos,
  parcel94EndPos
);



// Parcel 95 (8, 70, 88)
const parcel95StartPos: [number, number, number] = [8, 75, 88];
const parcel95EndPos: [number, number, number] = [8, 73.5, 88];

createEntityWithBehavior(
  'Parcel 95',
  new Vector3(8, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel95pic,
  resources.serverImageLinks.parcel95pic,
  resources.artistLinks.parcel95Link,
  resources.hoverText.parcel95Text,
  parcel95StartPos,
  parcel95EndPos
);


// Parcel 87 (40, 73.5, 72)
const parcel87StartPos: [number, number, number] = [40, 75, 72];
const parcel87EndPos: [number, number, number] = [40, 73.5, 72];

createEntityWithBehavior(
  'Parcel 87',
  new Vector3(40, 75, 72),
  new Vector3(3 * 1.4, 3 * 1.4, 1),
  resources.serverImageLinks.parcel87pic,
  resources.serverImageLinks.parcel87pic,
  resources.artistLinks.parcel87Link,
  resources.hoverText.parcel87Text,
  parcel87StartPos,
  parcel87EndPos
);


// Parcel 88 (56, 73.5, 72)
const parcel88StartPos: [number, number, number] = [56, 75, 72];
const parcel88EndPos: [number, number, number] = [56, 73.5, 72];

createEntityWithBehavior(
  'Parcel 88',
  new Vector3(56, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel88pic,
  resources.serverImageLinks.parcel88pic,
  resources.artistLinks.parcel88Link,
  resources.hoverText.parcel88Text,
  parcel88StartPos,
  parcel88EndPos
);


// Parcel 89 (72, 73.5, 72)
const parcel89StartPos: [number, number, number] = [72, 75, 72];
const parcel89EndPos: [number, number, number] = [72, 73.5, 72];

createEntityWithBehavior(
  'Parcel 89',
  new Vector3(72, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel89pic,
  resources.serverImageLinks.parcel89pic,
  resources.artistLinks.parcel89Link,
  resources.hoverText.parcel89Text,
  parcel89StartPos,
  parcel89EndPos
);


// Parcel 90 (88, 73.5, 72)
const parcel90StartPos: [number, number, number] = [88, 75, 72];
const parcel90EndPos: [number, number, number] = [88, 73.5, 72];

createEntityWithBehavior(
  'Parcel 90',
  new Vector3(88, 75, 72),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel90pic,
  resources.serverImageLinks.parcel90pic,
  resources.artistLinks.parcel90Link,
  resources.hoverText.parcel90Text,
  parcel90StartPos,
  parcel90EndPos
);


// Parcel 96 (24, 73.5, 88)
const parcel96StartPos: [number, number, number] = [24, 75, 88];
const parcel96BattleEndPos: [number, number, number] = [24, 73.5, 88];

createEntityWithBehavior(
  'Parcel 96',
  new Vector3(24, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel96pic,
  resources.serverImageLinks.parcel96pic,
  resources.artistLinks.parcel96Link,
  resources.hoverText.parcel96Text,
  parcel96StartPos,
  parcel96BattleEndPos
);


// Parcel 97 (40, 73.5, 88)
const parcel97StartPos: [number, number, number] = [40, 75, 88];
const parcel97EndPos: [number, number, number] = [40, 73.5, 88];

createEntityWithBehavior(
  'Parcel 97',
  new Vector3(40, 75, 88),
  new Vector3(4 * 1.4, 3 * 1.4, 1),
  resources.serverImageLinks.parcel97pic,
  resources.serverImageLinks.parcel97pic,
  resources.artistLinks.parcel97Link,
  resources.hoverText.parcel97Text,
  parcel97StartPos,
  parcel97EndPos
);


// Parcel 98 (56, 73.5, 88)
const parcel98StartPos: [number, number, number] = [56, 75, 88];
const parcel98EndPos: [number, number, number] = [56, 73.5, 88];

createEntityWithBehavior(
  'Parcel 98',
  new Vector3(56, 75, 88),
  new Vector3(3.5 * 1.4, 3 * 1.4, 1),
  resources.serverImageLinks.parcel98pic,
  resources.serverImageLinks.parcel98pic,
  resources.artistLinks.parcel98Link,
  resources.hoverText.parcel98Text,
  parcel98StartPos,
  parcel98EndPos
);


// Parcel 99 (72, 73.5, 88)
const parcel99StartPos: [number, number, number] = [72, 75, 88];
const parcel99EndPos: [number, number, number] = [72, 73.5, 88];

createEntityWithBehavior(
  'Parcel 99',
  new Vector3(72, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel99pic,
  resources.serverImageLinks.parcel99pic,
  resources.artistLinks.parcel99Link,
  resources.hoverText.parcel99Text,
  parcel99StartPos,
  parcel99EndPos
);


// Parcel 100 (88, 73.5, 88)
const parcel100StartPos: [number, number, number] = [88, 75, 88];
const parcel100EndPos: [number, number, number] = [88, 73.5, 88];

createEntityWithBehavior(
  'Parcel 100',
  new Vector3(88, 75, 88),
  new Vector3(3 * 1.4, 4 * 1.4, 1),
  resources.serverImageLinks.parcel100pic,
  resources.serverImageLinks.parcel100pic,
  resources.artistLinks.parcel100Link,
  resources.hoverText.parcel100Text,
  parcel100StartPos,
  parcel100EndPos
);




}






















