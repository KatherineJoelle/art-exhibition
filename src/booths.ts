import resources from "./resources";


export function createBooths() {


  // Function to create the booth entity
function createBoothEntity(model: GLTFShape, position: Vector3): Entity {
    const booth = new Entity();
    booth.addComponent(model);
    booth.addComponent(new Transform({
      position: position,
      scale: new Vector3(1.4, 1.4, 1.4),
    }));
    engine.addEntity(booth);
    return booth;
  }

// Parcel 1
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-56, 70, -56));

// Parcel 2
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-40, 70, -56));

// Parcel 3
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-24, 70, -56));

// Parcel 4
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-8, 70, -56));

// Parcel 5
createBoothEntity(resources.models.booths.boothShape2, new Vector3(8, 70, -56));

// Parcel 6
createBoothEntity(resources.models.booths.boothShape1, new Vector3(24, 70, -56));

// Parcel 7
createBoothEntity(resources.models.booths.boothShape2, new Vector3(40, 70, -56));

// Parcel 8
createBoothEntity(resources.models.booths.boothShape1, new Vector3(56, 70, -56));

// Parcel 9
createBoothEntity(resources.models.booths.boothShape2, new Vector3(72, 70, -56));

// Parcel 10
createBoothEntity(resources.models.booths.boothShape1, new Vector3(88, 70, -56));

// Parcel 11
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-56, 70, -40));

// Parcel 12
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-40, 70, -40));

// Parcel 13
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-24, 70, -40));

// Parcel 14
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-8, 70, -40));

// Parcel 15
createBoothEntity(resources.models.booths.boothShape1, new Vector3(8, 70, -40));

// Parcel 16
createBoothEntity(resources.models.booths.boothShape3, new Vector3(24, 70, -40));

// Parcel 17
createBoothEntity(resources.models.booths.boothShape1, new Vector3(40, 70, -40));

// Parcel 18
createBoothEntity(resources.models.booths.boothShape3, new Vector3(56, 70, -40));

// Parcel 19
createBoothEntity(resources.models.booths.boothShape1, new Vector3(72, 70, -40));

// Parcel 20
createBoothEntity(resources.models.booths.boothShape3, new Vector3(88, 70, -40));

// Parcel 21
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-56, 70, -24));

// Parcel 22
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-40, 70, -24));

// Parcel 23
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-24, 70, -24));

// Parcel 24
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-8, 70, -24));

// Parcel 25
createBoothEntity(resources.models.booths.boothShape2, new Vector3(8, 70, -24));

// Parcel 26
createBoothEntity(resources.models.booths.boothShape1, new Vector3(24, 70, -24));

// Parcel 27
createBoothEntity(resources.models.booths.boothShape2, new Vector3(40, 70, -24));

// Parcel 28
createBoothEntity(resources.models.booths.boothShape1, new Vector3(56, 70, -24));

// Parcel 29
createBoothEntity(resources.models.booths.boothShape2, new Vector3(72, 70, -24));

// Parcel 30
createBoothEntity(resources.models.booths.boothShape1, new Vector3(88, 70, -24));

// Parcel 31
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-56, 70, -8));

// Parcel 32
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-40, 70, -8));

// Parcel 33
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-24, 70, -8));

// Parcel 34
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-8, 70, -8));

// Parcel 35
createBoothEntity(resources.models.booths.boothShape1, new Vector3(8, 70, -8));

// Parcel 36
createBoothEntity(resources.models.booths.boothShape3, new Vector3(24, 70, -8));

// Parcel 37
createBoothEntity(resources.models.booths.boothShape1, new Vector3(40, 70, -8));

// Parcel 38
createBoothEntity(resources.models.booths.boothShape3, new Vector3(56, 70, -8));

// Parcel 39
createBoothEntity(resources.models.booths.boothShape1, new Vector3(72, 70, -8));

// Parcel 40
createBoothEntity(resources.models.booths.boothShape3, new Vector3(88, 70, -8));

// Parcel 41
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-56, 70, 8));

// Parcel 42
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-40, 70, 8));

// Parcel 43
// Parcel 43
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-24, 70, 8));

// Parcel 44
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-8, 70, 8));

// Parcel 45
createBoothEntity(resources.models.ground.floorTileShape, new Vector3(8, 70, 8));

// Parcel 46
createBoothEntity(resources.models.ground.floorTileShape, new Vector3(24, 70, 8));

// Parcel 47
createBoothEntity(resources.models.booths.boothShape2, new Vector3(40, 70, 8));

// Parcel 48
createBoothEntity(resources.models.booths.boothShape1, new Vector3(56, 70, 8));

// Parcel 49
createBoothEntity(resources.models.booths.boothShape2, new Vector3(72, 70, 8));

// Parcel 50
createBoothEntity(resources.models.booths.boothShape1, new Vector3(88, 70, 8));


// Parcel 51
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-56, 70, 24));

// Parcel 52
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-40, 70, 24));

// Parcel 53
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-24, 70, 24));

// Parcel 54
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-8, 70, 24));

// Parcel 57
createBoothEntity(resources.models.booths.boothShape1, new Vector3(40, 70, 24));

// Parcel 58
createBoothEntity(resources.models.booths.boothShape3, new Vector3(56, 70, 24));

// Parcel 59
createBoothEntity(resources.models.booths.boothShape1, new Vector3(72, 70, 24));

// Parcel 60
createBoothEntity(resources.models.booths.boothShape3, new Vector3(88, 70, 24));

// Parcel 61
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-56, 70, 40));

// Parcel 62
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-40, 70, 40));

// Parcel 63
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-24, 70, 40));

// Parcel 64
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-8, 70, 40));

// Parcel 65
createBoothEntity(resources.models.booths.boothShape2, new Vector3(8, 70, 40));

// Parcel 66
createBoothEntity(resources.models.booths.boothShape1, new Vector3(24, 70, 40));

// Parcel 67
createBoothEntity(resources.models.booths.boothShape2, new Vector3(40, 70, 40));

// Parcel 68
createBoothEntity(resources.models.booths.boothShape1, new Vector3(56, 70, 40));

// Parcel 69
createBoothEntity(resources.models.booths.boothShape2, new Vector3(72, 70, 40));

// Parcel 70
createBoothEntity(resources.models.booths.boothShape1, new Vector3(88, 70, 40));

// Parcel 71
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-56, 70, 56));

// Parcel 72
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-40, 70, 56));

// Parcel 73
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-24, 70, 56));

// Parcel 74
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-8, 70, 56));

// Parcel 75
createBoothEntity(resources.models.booths.boothShape1, new Vector3(8, 70, 56));

// Parcel 76
createBoothEntity(resources.models.booths.boothShape3, new Vector3(24, 70, 56));

// Parcel 77
createBoothEntity(resources.models.booths.boothShape1, new Vector3(40, 70, 56));

// Parcel 78
createBoothEntity(resources.models.booths.boothShape3, new Vector3(56, 70, 56));

// Parcel 79
createBoothEntity(resources.models.booths.boothShape1, new Vector3(72, 70, 56));

// Parcel 80
createBoothEntity(resources.models.booths.boothShape3, new Vector3(88, 70, 56));

// Parcel 81
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-56, 70, 72));

// Parcel 82
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-40, 70, 72));

// Parcel 83
createBoothEntity(resources.models.booths.boothShape2, new Vector3(-24, 70, 72));

// Parcel 84
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-8, 70, 72));

// Parcel 85
createBoothEntity(resources.models.booths.boothShape2, new Vector3(8, 70, 72));

// Parcel 86
createBoothEntity(resources.models.booths.boothShape1, new Vector3(24, 70, 72));

// Parcel 87
createBoothEntity(resources.models.booths.boothShape2, new Vector3(40, 70, 72));

// Parcel 88
createBoothEntity(resources.models.booths.boothShape1, new Vector3(56, 70, 72));

// Parcel 89
createBoothEntity(resources.models.booths.boothShape2, new Vector3(72, 70, 72));

// Parcel 90
createBoothEntity(resources.models.booths.boothShape1, new Vector3(88, 70, 72));

// Parcel 91
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-56, 70, 88));

// Parcel 92
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-40, 70, 88));

// Parcel 93
createBoothEntity(resources.models.booths.boothShape1, new Vector3(-24, 70, 88));

// Parcel 94
createBoothEntity(resources.models.booths.boothShape3, new Vector3(-8, 70, 88));

// Parcel 95
createBoothEntity(resources.models.booths.boothShape1, new Vector3(8, 70, 88));

// Parcel 96
createBoothEntity(resources.models.booths.boothShape3, new Vector3(24, 70, 88));

// Parcel 97
createBoothEntity(resources.models.booths.boothShape1, new Vector3(40, 70, 88));

// Parcel 98
createBoothEntity(resources.models.booths.boothShape3, new Vector3(56, 70, 88));

// Parcel 99
createBoothEntity(resources.models.booths.boothShape1, new Vector3(72, 70, 88));

// Parcel 100
createBoothEntity(resources.models.booths.boothShape3, new Vector3(88, 70, 88));

}