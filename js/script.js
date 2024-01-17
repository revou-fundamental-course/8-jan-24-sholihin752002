function calculate() {
    // Menghitung luas
    var luasSide = parseFloat(document.getElementById('luasSide').value);
    var area = luasSide * luasSide;

    // Menampilkan hasil di HTML
    document.getElementById('sideLengthInfo').innerText = "Panjang Sisi = " + luasSide;
    document.getElementById('areaResultLuas').innerText = "Luas Persegi = " + area;
    
    // Menampilkan nilai sisi di dalam rumus
    document.getElementById('areaFormula').innerText = "Rumus = " + luasSide + " x " + luasSide;
}

    // Menghitung Keliling
function calculatePerimeter() {
        var kelilingSide = parseFloat(document.getElementById('kelilingSide').value);
        var perimeter = 4 * kelilingSide;

    // Menampilkan hasil di HTML
    document.getElementById('sideLengthInfo').innerText = "Panjang Sisi = " + kelilingSide;
    document.getElementById('areaResultKeliling').innerText = "Keliling Persegi = " + perimeter;
   
    // Menampilkan nilai sisi di dalam rumus
    document.getElementById('areaFormula').innerText = "Rumus = 4 x " + kelilingSide;
}

    //dropbox 
    function redirectToSelectedFile() {
        var selectElement = document.getElementById('calculationType');
        var selectedFile = selectElement.options[selectElement.selectedIndex].value;
        window.location.href = selectedFile;
    }