const express=require('express');

const router=express.Router();

let students = [
  { id: 1, name: "Rahul", branch: "CSE" },
  { id: 2, name: "Aman", branch: "IT" },
  { id: 3, name: "Priya", branch: "CSE" },
  { id: 4, name: "Riya", branch: "ECE" }
];


router.get("/getAll&Filter-students", (req, res) => {

  const { branch } = req.query;

  if (branch) {
    const filtered = students.filter(s => s.branch === branch);
    return res.json(filtered);
  }

  res.json(students);
});


router.delete("/delete-students/:id", (req, res) => {

  const id = parseInt(req.params.id);

  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });

});

module.exports=router;