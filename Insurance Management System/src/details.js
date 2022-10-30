function setDet() {
    
    const fname = localStorage.getItem('fname');
    const lname = localStorage.getItem('lname');
    const email = localStorage.getItem('email');
    const mob = localStorage.getItem('mob');
    const addr = localStorage.getItem('addr');
    
    const polno = localStorage.getItem('polno');
    const pa = localStorage.getItem('pa');
    const ma = localStorage.getItem('ma');
    const materm = localStorage.getItem('materm');

    document.getElementById('res-fname').innerHTML = fname;
    document.getElementById('res-lname').innerHTML = lname;
    document.getElementById('res-email').innerHTML = email;
    document.getElementById('res-mob').innerHTML = mob;
    document.getElementById('res-addr').innerHTML = addr;

    document.getElementById('res-polno').innerHTML = polno;
    document.getElementById('res-pa').innerHTML = pa;
    document.getElementById('res-ma').innerHTML = ma;
    document.getElementById('res-materm').innerHTML = materm;

}
