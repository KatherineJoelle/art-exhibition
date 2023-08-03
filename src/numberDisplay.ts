export function createNumberEntity(position: Vector3, number: string) {
    const numberEntity = new Entity()
    numberEntity.addComponent(new Transform({
      position: new Vector3(position.x, position.y + 2, position.z),
      scale: new Vector3(1, 1, 1)
    }))
  
    const numberText = new TextShape(number)
    numberText.color = Color3.Black()
    numberEntity.addComponent(new Billboard(false, true, false))
  
    numberEntity.addComponent(numberText)
  
    const glowEntity = new Entity()
    glowEntity.addComponent(new Transform({
      position: new Vector3(position.x, position.y + 2, position.z),
      scale: new Vector3(1.4, 1.4, 1.8) // Adjust the size of the glow entity
    }))
    glowEntity.addComponent(new Billboard(false, true, false))
  
    const glowTexture = new Texture("images/glow.png")
    const glowMaterial = new Material()
    glowMaterial.albedoTexture = glowTexture
    glowMaterial.alphaTexture = glowTexture
    glowMaterial.emissiveTexture = glowTexture
    glowMaterial.emissiveColor = Color3.White() // Glow colour
    glowMaterial.emissiveIntensity = 5 // Adjust the intensity of the glow
    glowMaterial.alphaTest = 0
  
    glowEntity.addComponent(new PlaneShape())
    glowEntity.addComponent(glowMaterial)
  
    engine.addEntity(numberEntity)
    engine.addEntity(glowEntity)
  }








// Number display 
// Booth positions
const boothPositions: Vector3[] = [
  new Vector3(-56, 80, -56),
  new Vector3(-40, 80, -56.001),
  new Vector3(-24, 80, -56),
  new Vector3(-8, 80, -56),
  new Vector3(8, 80, -56),
  new Vector3(24, 80, -56),
  new Vector3(40, 80, -56),
  new Vector3(56, 80, -56),
  new Vector3(72, 80, -56),
  new Vector3(88, 80, -56), //10
  new Vector3(-56, 80, -40),
  new Vector3(-40, 80, -40),
  new Vector3(-24, 80, -40),
  new Vector3(-8, 80, -40),
  new Vector3(8, 80, -40),
  new Vector3(24, 80, -40),
  new Vector3(40, 80, -40),
  new Vector3(56, 80, -40),
  new Vector3(72, 80, -40),
  new Vector3(88, 80, -40), //20
  new Vector3(-56, 80, -24),
  new Vector3(-40, 80, -24),
  new Vector3(-24, 80, -24),
  new Vector3(-8, 80, -24),
  new Vector3(8, 80, -24),
  new Vector3(24, 80, -24),
  new Vector3(40, 80, -24),
  new Vector3(56, 80, -24),
  new Vector3(72, 80, -24),
  new Vector3(88, 80, -24), //30
  new Vector3(-56, 80, -8),
  new Vector3(-40, 80, -8),
  new Vector3(-24, 80, -8),
  new Vector3(-8, 80, -8),
  new Vector3(8, 80, -8),
  new Vector3(24, 80, -8),
  new Vector3(40, 80, -8),
  new Vector3(56, 80, -8),
  new Vector3(72, 80, -8),
  new Vector3(88, 80, -8), //40
  new Vector3(-56, 80, 8),
  new Vector3(-40, 80, 8),
  new Vector3(-24, 80, 8),
  new Vector3(-8, 80, 8), //44
  new Vector3(40, 80, 8), //47
  new Vector3(56, 80, 8),
  new Vector3(72, 80, 8),
  new Vector3(88, 80, 8), //50
  new Vector3(-56, 80, 24),
  new Vector3(-40, 80, 24),
  new Vector3(-24, 80, 24), 
  new Vector3(-8, 80, 24), //54
  new Vector3(40, 80, 24), //57
  new Vector3(56, 80, 24),
  new Vector3(72, 80, 24),
  new Vector3(88, 80, 24), //60
  new Vector3(-56, 80, 40),
  new Vector3(-40, 80, 40),
  new Vector3(-24, 80, 40),
  new Vector3(-8, 80, 40),
  new Vector3(8, 80, 40),
  new Vector3(24, 80, 40),
  new Vector3(40, 80, 40),
  new Vector3(56, 80, 40),
  new Vector3(72, 80, 40),
  new Vector3(88, 80, 40), //70
  new Vector3(-56, 80, 56),
  new Vector3(-40, 80, 56),
  new Vector3(-24, 80, 56),
  new Vector3(-8, 80, 56),
  new Vector3(8, 80, 56),
  new Vector3(24, 80, 56),
  new Vector3(40, 80, 56),
  new Vector3(56, 80, 56),
  new Vector3(72, 80, 56),
  new Vector3(88, 80, 56), //80
  new Vector3(-56, 80, 72),
  new Vector3(-40, 80, 72),
  new Vector3(-24, 80, 72),
  new Vector3(-8, 80, 72),
  new Vector3(8, 80, 72),
  new Vector3(24, 80, 72),
  new Vector3(40, 80, 72),
  new Vector3(56, 80, 72),
  new Vector3(72, 80, 72),
  new Vector3(88, 80, 72), //90
  new Vector3(-56, 80, 88),
  new Vector3(-40, 80, 88),
  new Vector3(-24, 80, 88),
  new Vector3(-8, 80, 88),
  new Vector3(8, 80, 88),
  new Vector3(24, 80, 88),
  new Vector3(40, 80, 88),
  new Vector3(56, 80, 88),
  new Vector3(72, 80, 88),
  new Vector3(88, 80, 88), //100

  // Add more booth positions as needed
]

// Example numbers to display
const boothNumbers: string[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", 
"11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
"21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
"31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
"41", "42", "43", "44", "47", "48", "49", "50",
"51", "52", "53", "54", "57", "58", "59", "60",
"61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
"71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
"81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
"91", "92", "93", "94", "95", "96", "97", "98", "99", "100"] // Make sure the number of booth positions and numbers match

// Create number entities above each booth
for (let i = 0; i < boothPositions.length; i++) {
  const position = boothPositions[i]
  const number = boothNumbers[i].toString() // Convert the number to a string
  createNumberEntity(position, number)
}