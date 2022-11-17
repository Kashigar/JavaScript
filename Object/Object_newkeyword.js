var course=new Object()
{
    course.name="Java script"
    course.fees="free",
    course.trainer="Rekha_Maam",
    course.topics=["translators","functions","memoryexecution"]
    course.hours= function(){return 8}
    timings=new Object()
    {
    timings.morning="9.30 am"
    timings.evening="6 pm"
    }
}
course.session="afternoon"      // add extra property to object
delete course.fees                  // delete property from object
console.log(course);            // prints whole course object
timings.totalhours=8            // adds one property to  timings object
console.log(timings)            // prints whole timings object 
