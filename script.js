console.log("script is loaaded")

d3.html("./Tavola2.svg").then(function(svgDocument) {
  console.log(svgDocument);
  let svgNode = svgDocument.querySelector("svg");
  var w = 960,
    h = 800,
    maxNodeSize = 50,
    x_browser = 20,
    y_browser = 25,
    root;
  let container = document.querySelector("#visContainer");

  container.appendChild(svgNode);


  const flat = d3.selectAll("#FlatIllustration")
    const hazmatsuit = d3.selectAll("#HazmatSuit")
  const beer = d3.selectAll("#Beer")
  const characters = d3.selectAll("#characters")
  const monochrome = d3.selectAll("#Monochrome")
  const shaded = d3.selectAll("#shaded")
  const darkevil = d3.selectAll("#darkevil")
  const erotic = d3.selectAll("#erotic")
  const counter = d3.selectAll("#counter")
  const photomontage = d3.selectAll("#photomontage")
  const graphic = d3.selectAll("#graphic")
  const chan = d3.selectAll("#chan")
  const tutto = d3.selectAll("#FlatIllustration, #HazmatSuit, #Beer, #characters, #Monochrome, #shaded, #darkevil, #erotic, #counter, #photomontage, #graphic, #chan");




  //flat illustration
  flat.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_FlatIllustration.gif")
      .attr("id", "flatgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "flatgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 180)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("flat illustration")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  flat.on('mouseleave', function() {
    d3.select("#flatgif").remove();
    d3.select("#flatgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //shaded
  shaded.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_shaded.gif")
      .attr("id", "shadedgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)


    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "shadedgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 120)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("shaded")

      .attr("x", 14)
      .attr("y", 349)


    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  shaded.on('mouseleave', function() {
    d3.select("#shadedgif").remove();
    d3.select("#shadedgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")

  });

  //darkevil
  darkevil.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_darkevil.gif")
      .attr("id", "darkevilgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)


    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "darkevilgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 140)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("dark / evil")

      .attr("x", 14)
      .attr("y", 349)


    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  darkevil.on('mouseleave', function() {
    d3.select("#darkevilgif").remove();
    d3.select("#darkevilgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")

  });

  //erotic
  erotic.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_erotic.gif")
      .attr("id", "eroticgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "eroticgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 100)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("erotic")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  erotic.on('mouseleave', function() {
    d3.select("#eroticgif").remove();
    d3.select("#eroticgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")

  });

  //counter
  counter.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_counter.gif")
      .attr("id", "countergif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "countergif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 120)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("counter")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  counter.on('mouseleave', function() {
    d3.select("#countergif").remove();
    d3.select("#countergif1").remove();
    tutto
      .transition()
      .style("opacity", "1")

  });

  //photomontage
  photomontage.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_photomontage.gif")
      .attr("id", "photomontagegif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "photomontagegif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 180)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("photomontage")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  photomontage.on('mouseleave', function() {
    d3.select("#photomontagegif").remove();
    d3.select("#photomontagegif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //graphic
  graphic.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_graphic.gif")
      .attr("id", "graphicgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "graphicgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 120)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("graphic")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  graphic.on('mouseleave', function() {
    d3.select("#graphicgif").remove();
    d3.select("#graphicgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });


  //chan
  chan.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_chan.gif")
      .attr("id", "changif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "changif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 100)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("+ chan")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  chan.on('mouseleave', function() {
    d3.select("#changif").remove();
    d3.select("#changif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //Monochrome
  monochrome.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_monochrome.gif")
      .attr("id", "monochromegif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "monochromegif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 170)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("monochrome")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  monochrome.on('mouseleave', function() {
    d3.select("#monochromegif").remove();
    d3.select("#monochromegif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //beer
  beer.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_beer.gif")
      .attr("id", "beergif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "beergif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 160)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("corona beer")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  beer.on('mouseleave', function() {
    d3.select("#beergif").remove();
    d3.select("#beergif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //characters
  characters.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_characters.gif")
      .attr("id", "charactersgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "charactersgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 150)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("characters")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  characters.on('mouseleave', function() {
    d3.select("#charactersgif").remove();
    d3.select("#charactersgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });

  //hazmatsuit
  hazmatsuit.on('mouseenter', function() {
      let pos = d3.pointer(event);
    console.log(pos)
    d3.select(svgNode).append("image").attr("xlink:href", "./Corona_hazmatsuit.gif")
      .attr("id", "hazmatsuitgif")
      .attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("width", 300)
      .attr("height", 300)

    var g = d3.select(svgNode).append("g")
    g.attr("transform", "translate(" + pos[0] + " ," + pos[1] + ")")
      .attr("id", "hazmatsuitgif1")
    g.append("rect")
      .attr("class", "etichetta")
      .attr("width", 160)
    g.append("text")
      .attr("class", "etichetta1")
    d3.select("text").text("hazmat suit")
      .attr("x", 14)
      .attr("y", 349)

    var circleUnderMouse = this;
    tutto.filter(function(d, i) {
      return (this !== circleUnderMouse);
    }).transition().style('opacity', '0.3');
    d3.select(this).attr('opacity', '1.0');
  })

  hazmatsuit.on('mouseleave', function() {
    d3.select("#hazmatsuitgif").remove();
    d3.select("#hazmatsuitgif1").remove();
    tutto
      .transition()
      .style("opacity", "1")
  });
})
