const mongoose = require('mongoose');
 
//Attributes of the Course object
//Simple Schema
var courseSchema = new mongoose.Schema({
courseName: {
type: String,
required: 'This field is required!'
},
courseId: {
type: String
},
courseDuration: {
type: String
},
courseFee: {
type: String
}
});
 
mongoose.model('Course', courseSchema);
//exported as Schema module named "Course"