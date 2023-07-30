function event1() {
    const margin = 50,
        width = 600 - 2 * margin,
        height = 500 - 2 * margin;

    const svg = d3.select("#linegraph")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
    
    const x = d3.scaleLinear().domain([1946, 2022]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 130]).range([height, 0]);

    d3.csv("League_PPG.csv").then(function(data){

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(20).tickFormat(d3.format("d")));

        svg.append("g").call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 2.0)
            .attr("d", d3.line().x(0).y(height-200))
            .transition().duration(2000).delay(1000)
            .attr("d", d3.line()
                .x(function(d){return x(d.Season)})
                .y(function(d){return y(d.PTS)})
            )
    })

    svg.append("text").text("NBA League Average PPG Over The Years").style("font-size","1.5em").attr("x",250).attr("y",0).attr("text-anchor", "middle")
    svg.append("text").text("Season Start Year").attr("x",250).attr("y",height+40).attr("text-anchor", "middle");
    svg.append("text").text("League Average PPG").attr("x",-200).attr("y",-30).attr("transform","rotate(-90)").attr("text-anchor", "middle");

    var event1 = document.getElementById("event1");
    event1.style.display = "block";
}

function event2() {
    var event2 = document.getElementById("event2");
    event2.style.display = "block";
}

function event3() {
    const margin = 50,
        width = 600 - 2 * margin,
        height = 500 - 2 * margin;

    const svg = d3.select("#scatter")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");

    const x = d3.scaleLinear().domain([0, 40]).range([ 0, width ]);
    const y = d3.scaleLinear().domain([0, 30]).range([ height, 0]);

    d3.csv("Player_data1.csv").then(function(data){

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g").call(d3.axisLeft(y));

        svg.append('g')
            .selectAll("seasondot")
            .data(data)
            .join("circle")
            .attr("cx", function (d){return x(d.MIN)})
            .attr("r", 4)
            .style("stroke", "black")
            .style("fill", "#5A2D81")
            .attr("cy", height)
            .transition().duration(2000).delay(500)
            .attr("cy", function (d){return y(d.PTS)})
    })
    d3.csv("Player_data2.csv").then(function(data){

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g").call(d3.axisLeft(y));

        svg.append('g')
            .selectAll("postseasonsqr")
            .data(data)
            .join("rect")
            .attr('x', function (d){return x(d.MIN)})
            .attr('y', 0)
            .attr('width', 8)
            .attr('height', 8)
            .attr("transform", "translate(-4, -4)")
            .style("stroke", "black")
            .style("fill", "#63727A")
            .attr("y", height)
            .transition().duration(2000).delay(2500)
            .attr("y", function (d){return y(d.PTS)})
    })

    //reg starting 5 avg
    svg.append("g")
        .append("line")
        .attr("x1", 0).attr("y1",height).attr("x2", 500).attr("y2",height)
        .style("stroke","#5A2D81").style("stroke-width", 2)
        .transition().duration(2000).delay(4500)
        .attr("x1", 0).attr("y1",166).attr("x2", 500).attr("y2",166)
    svg.append("text")
        .style("font-size",".65em").style("fill", "#5A2D81")
        .text("Regular Season Starters Avg PPG")
        .attr("x",-200).attr("y", 160)
        .transition().duration(2000).delay(4500)
        .attr("x",5).attr("y", 160);

    //post starting 5 avg
    svg.append("g")
        .append("line")
        .attr("x1", 0).attr("y1",height).attr("x2", 500).attr("y2",height)
        .style("stroke","#63727A").style("stroke-width", 2)
        .transition().duration(2000).delay(4500)
        .attr("x1", 0).attr("y1",178).attr("x2", 500).attr("y2",178)
    svg.append("text")
        .style("font-size",".65em").style("fill", "#63727A")
        .text("Post Season Starters Avg PPG")
        .attr("x",-200).attr("y", 190)
        .transition().duration(2000).delay(4500)
        .attr("x",5).attr("y", 190);

    //reg  bench
    svg.append("g")
        .append("line")
        .attr("x1", 0).attr("y1",height).attr("x2", 500).attr("y2",height)
        .style("stroke","#5A2D81").style("stroke-dasharray","10,10").style("stroke-width", 2)
        .transition().duration(2000).delay(4500)
        .attr("x1", 0).attr("y1",323).attr("x2", 500).attr("y2",323)
    svg.append("text")
        .style("font-size",".65em").style("fill", "#5A2D81")
        .text("Regular Season Bench Avg PPG")
        .attr("x",600).attr("y", 317)
        .transition().duration(2000).delay(4500)
        .attr("x",355).attr("y", 317);

    //post bench
    svg.append("g")
        .append("line")
        .attr("x1", 0).attr("y1",height).attr("x2", 500).attr("y2",height)
        .style("stroke","#63727A").style("stroke-dasharray","10,10").style("stroke-width", 2)
        .transition().duration(2000).delay(4500)
        .attr("x1", 0).attr("y1",342).attr("x2", 500).attr("y2",342)
    svg.append("text")
        .style("font-size",".65em").style("fill", "#63727A")
        .text("Post Season Bench Avg PPG")
        .attr("x",600).attr("y", 354)
        .transition().duration(2000).delay(4500)
        .attr("x", 355).attr("y", 354);
    
    //annotation
    svg.append("rect")
        .attr('width', 235).attr('height', 15).attr("x",-300).attr("y", 90)
        .style("stroke", "black").style("fill", "#FAFAFA")
        .transition().duration(2000).delay(4500)
        .attr('x', 5).attr('y', 90)
    svg.append("text")
        .style("font-size",".65em")
        .text("Starter and bench averages declined in the post season")
        .attr("x",-300).attr("y", 100)
        .transition().duration(2000).delay(4500)
        .attr("x",10).attr("y", 100);
    
    //Legend
    const legendX = 380
    const legendY = 360
    svg.append("rect")
        .attr('x', legendX).attr('y', legendY).attr('width', 120).attr('height', 35)
        .style("stroke", "black").style("fill", "white")
    svg.append("circle")
        .attr("cx",legendX+15).attr("cy",legendY+10).attr("r", 4)
        .style("stroke", "black").style("fill", "#5A2D81")
    svg.append("rect")
        .attr('x', legendX+15).attr('y', legendY+25).attr('width', 8).attr('height', 8)
        .style("stroke", "black").style("fill", "#63727A")
        .attr("transform", "translate(-4, -4)")
    svg.append("text").attr("x", legendX+25).attr("y", legendY+14).text("Regular Season PPG").style("font-size", ".65em")
    svg.append("text").attr("x", legendX+25).attr("y", legendY+29).text("Post Season PPG").style("font-size", ".65em")


    svg.append("text").text("2022-2023 SAC Kings PPG by Minutes").style("font-size","1.5em").attr("x",250).attr("y",0).attr("text-anchor", "middle")
    svg.append("text").text("Minutes").attr("x",250).attr("y",height+40).attr("text-anchor", "middle");
    svg.append("text").text("PPG").attr("x",-200).attr("y",-30).attr("transform","rotate(-90)").attr("text-anchor", "middle");


    var event3 = document.getElementById("event3");
    event3.style.display = "block";
}


function event4() {
    one = document.getElementById("event1");
    d3.select("#linegraph").selectAll("*").remove();
    one.style.display = "none";

    two = document.getElementById("event2");
    two.style.display = "none";

    three = document.getElementById("event3");
    d3.select("#scatter").selectAll("*").remove();
    three.style.display = "none";
}