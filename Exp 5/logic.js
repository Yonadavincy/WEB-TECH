<!DOCTYPE html>
<html>

<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>URK20CS2004</title>
 <link rel="stylesheet" href="style.css">
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
 <style>
 body {
 background-color: #4deed8;
 background-repeat: no-repeat;
 background-attachment: fixed;
 background-size: cover;
 }
 </style>
</head>

<body>
 <h1 class="text-center header1">JAVASCRIPT DOM ELEMENTS AND EVENTS</h1>
 <br>
 <section>
 <h3 class="text-center">1. Shortest And Longest Word</h3>
 <div class="container col-sm-6 mt-5">
 <label for="t1" class="form-label text-white">Enter a String</label>
 <input type="text" id="lgth" class="form-control">
 <div class="text-center ">
 <button class="btn btn-outline-primary mt-5" onclick="length()">Submit</button>
 </div>
 <h5 id="otpt" class="text-center text-primary mt-5 mb-5"></h5>
 </div>

 </section>
<hr>
 <section>
 <h3 class="text-center">2. BMI Calculator</h3>
 <div class="container col-sm-3 mt-5">
 <label for="t3" class="form-label text-white mt-4">Enter Weight</label>
 <input type="text" id="w" class="form-control">
 <br>
 <label for="t2" class="form-label text-white">Enter Height(metres)</label>
 <input type="text" id="h" class="form-control">

 <div class="text-center ">
 <button class="btn btn-outline-primary mt-5" onclick="bmi()">Submit</button>
 </div>

 <h5 id="result2" class="text-center text-primary mt-5 mb-5"></h5>
 </div>


 </section>
<hr>
 <section>
 <h3 class="text-center">3. Fruit Farm</h3>
 <div class="container col-sm-3 mt-5">
 <label for="height" class="form-label text-white">Height:</label>
 <input type="text" id="height" class="form-control"><br>
 <label for="width" class="form-label text-white ">Width:</label>
 <input type="text" id="width" class="form-control">
 <div class="text-center ">
 <button class="btn btn-outline-primary mt-5 mb-5" onclick="fruit()">Submit</button>
 </div>
 </div>
 <h5 id="garden" class="text-center mb-5"></h5>

 </section>
<hr>
 <section id="Q4">
 <h3 class="text-center">4. Currency Converter</h3>
 <div class="container col-sm-3 mt-5">

 <label for="value" class="form-label text-white ">Enter Value</label>
 <input type="text" id="value" class="form-control">
 <br>
 <label for="from" class="form-label text-white">Choose From</label>
 <select id="from" class="form-select">
 <option value="INR" selected>INR</option>
 <option value="USD">USD</option> 
 </select>
 <br>

 <label for="to" class="form-label text-white mt-3">Convert To</label>
 <select id="to" class="form-select">
 <option value="USD" selected>USD</option>
 <option value="INR">INR</option> 
 </select>


 <div class="text-center ">
 <button class="btn btn-outline-warning mt-5 mb-5" onclick="convert()">Convert</button>
 </div>
 </div>
 <h5 id="convertedValue" class="text-center text-warning mb-5"></h5>

 </section>
<hr>
 <section id="Q5">
 <h3 class="text-center">5. Coin Flip</h3>
 <div class="container col-sm-3 mt-5">
 <div class="text-center">
 <button class="btn btn-outline-primary btn-lg mb-5" onclick="flip()">Flip</button>
 </div>
 </div>
 <div class="text-center mb-5" id="coin"></div>
 <h5 id="count" class="text-center text-primary"></h5>

 </section>
<hr>
 <section id="Q6">
 <h3 class="text-center">6. Cake Order Form</h3>
 <div class="container col-sm-3 mt-5">
 <label for="cake" class="form-label text-white">Choose Cake</label>
 <select id="cake" class="form-select">
 <option value="Small" selected>Small</option>
 <option value="Medium">Medium</option>
 <option value="Large">Large</option> 
 </select>

 <label for="tip" class="form-label text-white mt-3">Choose Tip</label>
 <select id="tip" class="form-select">
 <option value="0" selected>None</option>
 <option value="10">10%</option>
 <option value="15">15%</option>
 <option value="20">20%</option> 
 </select>
 <div class="text-center">
 <button class="btn btn-outline-primary mt-5 mb-5" onclick="cake()">Calculate Order</button>
 </div>
 </div>
 <h5 id="cost" class="text-center text-warning mb-5"></h5>

 </section>
<hr>
 <script src="logic.js"></script>
</body>

</html>
