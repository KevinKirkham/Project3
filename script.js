// Force

class Force {
    constructor(mass, acceleration) {
        this.mass = mass;
        this.acceleration = acceleration;
        this.force = undefined;
    }

    calculate() {
        this.force = this.mass * this.acceleration;  
    }

    display() {
        document.getElementById("ansTitle").innerHTML = "Force: ";
        document.getElementById("calculation").innerHTML = this.force;
    }
}

function calculateForce() {
    let mass = document.getElementById("mass").value;
    let acc = document.getElementById("acceleration").value;

    if (validate([mass, acc])) {
        let f = new Force(mass, acc);
        f.calculate();
        f.display();
    }
}

// Displacement

class Displacement {
    constructor(velocity, time, acceleration) {
        this.velocity = velocity;
        this.time = time;
        this.acceleration = acceleration;
        this.displacement = undefined;
    }

    calc() {
        this.displacement = (this.velocity * this.time) - ((1/2) * (this.acceleration * Math.pow(this.time, 2)));
    }

    display() {
        document.getElementById("displaceAnsTitle").innerHTML = "Displacement: ";
        document.getElementById("displaceAns").innerHTML = this.displacement;
    }
};

function calculateDisplacement() {
    let velocity = document.getElementById("velocity").value;
    let time = document.getElementById("time").value;
    let acceleration = document.getElementById("acc").value;

    if (validate([velocity, time, acceleration])) {
        let d = new Displacement(velocity, time, acceleration);
        d.calc();
        d.display();
    }
}

// Quadratic Equation
// No real solutions --- a = 2, b = -6, c = 5
// One solution --- a = 2, b = 12, c = 18
// Two Solutions --- a = 1, b = -6, c = -35

class Quadratic {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.discriminate = Math.pow(b, 2) - (4 * a * c);   // Needed to detmermine solution(s)
        this.root1 = undefined;
        this.root2 = undefined;
        this.noReals = false;
    }

    determineSolution() {
        if (this.discriminate < 0) {
            // no real solutions
            this.noReals = true;
        }
        else if (this.discriminate > 0) {
            // 2 solutions
            this.root1 = (-(this.b) + Math.sqrt(this.discriminate)) / (2 * this.a);
            this.root2 = (-(this.b) - Math.sqrt(this.discriminate)) / (2 * this.a);
        }
        else if (this.discriminate == 0) {
            // 1 solution, -b/2a
            this.root1 = -(this.b) / (2 * this.a);
        }
    }

    display() {
        if (this.noReals == true) {
            // No solutions
            this.setInnerHTMLQuad("", "", "No real solutions");
        }
        else if (this.root2 != undefined) {
            // 2 solutions
            this.setInnerHTMLQuad(this.root1, this.root2, "Roots: ");
        }
        else if (this.root1 != undefined) {
            // 1 solution
            this.setInnerHTMLQuad(this.root1, "", "Roots: ");
        }
    }

    setInnerHTMLQuad(root1, root2, title) {
        document.getElementById("quadEQansTitle").innerHTML = title;
        document.getElementById("quadEQans1").innerHTML = root1;
        document.getElementById("quadEQans2").innerHTML = root2;
    }
};

function calculateQuadratic() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    if (validate([a, b, c])) {
        let q = new Quadratic(a, b, c);
        q.determineSolution();
        q.display();
    }
}

// Annuity Stream

class AnnuityStream {
    constructor(pmt, r, n) {
        this.pmt = pmt;
        this.r = r;
        this.n = n;
        this.p = undefined;
    }

    display() {
        document.getElementById("annuitySreamTitle").innerHTML = "Value: ";
        document.getElementById("annuityStreamAns").innerHTML = this.p;
    }

    calculate() {
        this.p = this.pmt * ((1 - (1 / Math.pow((1 + this.r), this.n))) / this.r);
    }
}

function calculateAnnuityStream() {
    let pmt = document.getElementById("pmt").value;
    let r = document.getElementById("r").value;
    let n = document.getElementById("n").value;

    if (validate([pmt, r, n])) {
        let as = new AnnuityStream(pmt, r, n);
        as.calculate();
        as.display();
    }
}

// Input Validation

function validate(list) {
    for (let i = 0; i < list.length; i++) {
        if (isNaN(list[i]) || list[i] == "") {
            alert("You need to input a number!");
            return false;
        }
    }
    return true;
}