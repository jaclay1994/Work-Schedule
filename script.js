$(document).ready(function(){

var day = window.Date()
var mainTime = $("#currentDay").append(day)
// var future = $("input").addClass("future")
// var past = $("input").addClass("past")
// var present = $("input").addClass("present")

function hourCompare() {
    var n = moment().hours()
    $(".time-block").each(function(){
        var dataTime = $(this).attr("data-time")

        console.log(dataTime)

        if (dataTime < n) {
            $(this).siblings(".description").addClass("past")
        } else if (dataTime == n) {
            $(this).siblings(".description").removeClass("past")
            $(this).siblings(".description").addClass("present")
        } else {
            $(this).siblings(".description").removeClass("present")
            $(this).siblings(".description").addClass("future")
        }
    })
    
    console.log(n)
    
    

}
hourCompare()

    var saveBtn = $("button")

    saveBtn.on("click", function() {
        var dataTime = $(this).attr("data-btn")
        dataTime.siblings(".description")
        // console.log(localStorage.setItem(dataTime))
        console.log(dataTime)

    })

    function getText(text) {
        text = $("input")
        console.log(text)
    }
    getText

// var time = window.Date()
// // console.log(time)

// // var dataNum = $("input").data($("date-time"))

//     var d = new Date();
    
//     var m = d.getMinutes()
//     var o = d.getSeconds()
//     var q = d.getTime()
// //    console.log(n)
//    console.log(m)
//    console.log(o)
//    console.log(q)
//    console.log(dataNum)
})