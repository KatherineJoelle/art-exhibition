import resources from "./resources";

export function createGround() {

  // Function to create the ground entity
  function createGroundEntity(model: GLTFShape, position: Vector3): Entity {
    const ground = new Entity();
    ground.addComponent(model);
    ground.addComponent(new Transform({
      position: position,
      scale: new Vector3(1, 1, 1),
    }));
    engine.addEntity(ground);
    return ground;
  }



// Create ground entities for parcels

// Parcel 1
const tile73 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, -56));

// Parcel 2
const tile74 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, -56));

// Parcel 3
const tile75 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, -56));

// Parcel 4
const tile76 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, -56));

// Parcel 5
const tile77 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, -56));

// Parcel 6
const tile78 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, -56));

// Parcel 7
const tile79 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, -56));

// Parcel 8
const tile80 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, -56));

// Parcel 9
const tile81 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, -56));

// Parcel 10
const tile82 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, -56));

// Parcel 11
const tile72 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, -40));

// Parcel 12
const tile19 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, -40));

// Parcel 13
const tile20 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, -40));

// Parcel 14
const tile21 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, -40));

// Parcel 15
const tile22 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, -40));

// Parcel 16
const tile23 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, -40));

// Parcel 17
const tile24 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, -40));

// Parcel 18
const tile25 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, -40));

// Parcel 19
const tile26 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, -40));

// Parcel 20
const tile83 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, -40));

// Parcel 21
const tile71 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, -24));

// Parcel 22
const tile18 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, -24));

// Parcel 23
const tile59 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, -24));

// Parcel 24
const tile60 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, -24));

// Parcel 25
const tile61 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, -24));

// Parcel 26
const tile62 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, -24));

// Parcel 27
const tile63 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, -24));

// Parcel 28
const tile64 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, -24));

// Parcel 29
const tile27 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, -24));

// Parcel 30
const tile84 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, -24));

// Parcel 31
const tile70 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, -8));

// Parcel 32
const tile17 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, -8));

// Parcel 33
const tile58 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, -8));

// Parcel 34
const tile57 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, -8));

// Parcel 35
const tile56 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, -8));

// Parcel 36
const tile55 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, -8));

// Parcel 37
const tile54 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, -8));

// Parcel 38
const tile53 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, -8));

// Parcel 39
const tile28 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, -8));

// Parcel 40
const tile85 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, -8));

// Parcel 41
const tile69 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 8));

// Parcel 42
const tile16 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 8));

// Parcel 43
const tile48 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 8));

// Parcel 44
const tile49 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 8));

// Parcel 45
const tile1 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 8));

// Parcel 46
const tile50 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 8));

// Parcel 47
const tile51 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 8));

// Parcel 48
const tile52 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 8));

// Parcel 49
const tile29 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 8));

// Parcel 50
const tile86 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 8));

// Parcel 51
const tile68 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 24));

// Parcel 52
const tile15 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 24));

// Parcel 53
const tile47 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 24));

// Parcel 54
const tile46 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 24));

// Parcel 55
const tile45 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 24));

// Parcel 56
const tile2 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 24));

// Parcel 57
const tile44 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 24));

// Parcel 58
const tile43 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 24));

// Parcel 59
const tile30 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 24));

// Parcel 60
const tile87 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 24));

// Parcel 61
const tile67 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 40));

// Parcel 62
const tile14 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 40));

// Parcel 63
const tile38 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 40));

// Parcel 64
const tile39 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 40));

// Parcel 65
const tile40 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 40));

// Parcel 66
const tile41 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 40));

// Parcel 67
const tile3 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 40));

// Parcel 68
const tile42 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 40));

// Parcel 69
const tile31 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 40));

// Parcel 70
const tile88 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 40));

// Parcel 71
const tile66 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 56));

// Parcel 72
const tile13 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 56));

// Parcel 73
const tile37 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 56));

// Parcel 74
const tile36 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 56));

// Parcel 75
const tile35 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 56));

// Parcel 76
const tile34 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 56));

// Parcel 77
const tile33 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 56));

// Parcel 78
const tile4 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 56));

// Parcel 79
const tile32 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 56));

// Parcel 80
const tile89 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 56));

// Parcel 81
const tile65 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 72));

// Parcel 82
const tile12 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 72));

// Parcel 83
const tile11 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 72));

// Parcel 84
const tile10 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 72));

// Parcel 85
const tile9 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 72));

// Parcel 86
const tile8 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 72));

// Parcel 87
const tile7 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 72));

// Parcel 88
const tile6 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 72));

// Parcel 89
const tile5 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 72));

// Parcel 90
const tile90 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 72));

// Parcel 91
const tile100 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-56, 70, 88));

// Parcel 92
const tile99 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-40, 70, 88));

// Parcel 93
const tile98 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-24, 70, 88));

// Parcel 94
const tile97 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(-8, 70, 88));

// Parcel 95
const tile96 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 88));

// Parcel 96
const tile95 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 88));

// Parcel 97
const tile94 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(40, 70, 88));

// Parcel 98
const tile93 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(56, 70, 88));

// Parcel 99
const tile92 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(72, 70, 88));

// Parcel 100
const tile91 = createGroundEntity(resources.models.ground.floorTileShape, new Vector3(88, 70, 88));

}