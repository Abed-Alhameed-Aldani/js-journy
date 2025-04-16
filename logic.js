function generateReports(students) {

    return students.map((student) => {


      const total = student.scores.reduce((sum, score) => sum + score, 0);
      const average = Math.round(total / student.scores.length);
  

      let grade;
      if (average >= 90) grade = "A";

      else if (average >= 80) grade = "B";

      else if (average >= 70) grade = "C";


      else if (average >= 60) grade = "D";

      else grade = "F";
  
 
      
      return {
        name: student.name,
        average: average,
        grade: grade,
      };
    });
  }

  

  const students = [
    { name: "Sara", scores: [90, 85, 92] },
    { name: "Taha", scores: [70, 68, 72] },
    { name: "Abed", scores: [100, 100, 100] },
  ];
  
  console.log(generateReports(students));
  


// #QUESTION 2


class BankAccount {
    constructor(ownerName, initialBalance) {
      this.ownerName = ownerName;

      this.balance = initialBalance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log(" Insuficient balance");
      }
    }
  
    transferTo(anotherAccount, amount) {
      if (amount <= this.balance) {
        this.withdraw(amount);
        anotherAccount.deposit(amount);
      } else {
        console.log("Transfer failed: insuficient funds");
      }
    }
  
    getSummary() {
      return `${this.ownerName}'s balance is $${this.balance}`;
    }
  }
  

  const acc1 = new BankAccount("abed", 700);
  const acc2 = new BankAccount("ahmad", 300);
  
  acc1.transferTo(acc2, 200);
  
  console.log(acc1.getSummary()); 
  console.log(acc2.getSummary()); 
  
  //===============================================================================

  