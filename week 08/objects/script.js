
const artifact = {
  age: 0,
  name: "Ancient Vase",
  material: "Ceramic",
  getOlder: function() {
    this.age += 1;
  }
};

function displayArtifactInfo() {
  document.getElementById("artifact-info").textContent = `Name: ${artifact.name}, Age: ${artifact.age}, Material: ${artifact.material}`;
}

const actionBtn = document.getElementById("artifact-button");
actionBtn.addEventListener("click", function(){
  artifact.age += 1;
  displayArtifactInfo();
})