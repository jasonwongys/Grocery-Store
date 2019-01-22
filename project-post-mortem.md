Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

https://github.com/danluu/post-mortems https://blog.codinghorror.com/the-project-postmortem/

What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

Approach and Process
What in my process and approach to this project would I do differently next time?

JW: Plan out the SQL query strings and use cases. And also how each table interact with each other. 

What in my process and approach to this project went well that I would repeat next time?

JW: Wire framing the project for each web form and how each data is passed around. 

Code and Code Design
What in my code and program design in the project would I do differently next time?

JW: Plan out the use cases with the user in mind from start to end. 

What in my code and program design in the project went well? Is there anything I would do the same next time?

JW: Majority of my CRUD routes and passing of data between pages went well.

For each, please include code examples.

Code snippet up to 20 lines.
Code design documents or architecture drawings / diagrams.

app.put('/cart/:id', (req, res) => {
  let id = req.params.id;
  let quantity = req.body.quantity;
  //let queryText = `UPDATE cart SET quantity = '${req.body.quantity}' WHERE cart.items_id = '${id}'`;
  let queryText = `UPDATE cart SET quantity=$1 WHERE items_id=$2 RETURNING *`;
  const values = [req.body.quantity,req.params.id,];

  pool.query(queryText, values, (err, queryResult) => {
    if(err) {
      console.log("Error: ", err);
    } else {
        console.log("Result: ", queryResult.rows);
        res.redirect("/cart");
    }

  });
});


WDI Unit 2 Post Mortem
What habits did I use during this unit that helped me?

JW: Wire framing. 


What habits did I have during this unit that I can improve on?

JW: Seek for help more if unable to troubleshoot a specific bug for a period of time. 

How is the overall level of the course during this unit? (instruction, course materials, etc.)

Ok. Gitbook can be improved to be more specific in the instructions. Also on the typo errors.