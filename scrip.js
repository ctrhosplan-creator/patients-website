<div id="sheetTable"></div>

<script>

</script>const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQkeNpfWKavDklihMocnMbZtI4nub9OYOTJ4Y5ceK7ThGmnVTYm0wmyumDjx6wqLbs6JLV2Yna6872o/pub?gid=0&single=true&output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").map(r => r.split(","));
    let html = "<table border='1'><thead><tr>";
    rows[0].forEach(col => html += `<th>${col}</th>`);
    html += "</tr></thead><tbody>";
    rows.slice(1).forEach(r => {
      if(r[0]) {
        html += "<tr>";
        r.forEach(c => html += `<td>${c}</td>`);
        html += "</tr>";
      }
    });
    html += "</tbody></table>";
    document.getElementById("sheetTable").innerHTML = html;
  });
</script>

