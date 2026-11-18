


async function loadExhibitData() {

  const response = await fetch("exhibits_data.csv");
  const text = await response.text();

  const lines = text.split("\n"); // split the text into lines

  const propNames = lines.shift().split(","); // shift returns the first line and removes it from the array

  const exhibits = [];

  lines.forEach(line => {
    const values = line.split(",");
    const exhibitObj = {};
    
    propNames.forEach((propName, index) => {
      exhibitObj[propName] = values[index];
    });

    exhibits.push(exhibitObj);
  });
  
  console.log(exhibits);


  const chart = document.querySelector("#chart");

  const maxVisitors = Math.max(
    ...exhibits.map(exhibit => parseInt(exhibit.visitors))
  );


  const totalVisitors = exhibits.reduce(
    (sum, exhibit) => sum + parseInt(exhibit.visitors),
    0
  );

  exhibits.forEach(exhibit => {

    const row = document.createElement("div");
    row.className = "chart-row";

    const label = document.createElement("span");
    label.textContent = exhibit.name;

    const bar = document.createElement("div");
    bar.className = "bar";

    const width = exhibit.visitors / totalVisitors * 100;

    bar.style.width = `${width}%`;

    const value = document.createElement("span");
    value.textContent = exhibit.visitors;

    row.append(label, bar, value);
    chart.append(row);

  });

}

loadExhibitData();