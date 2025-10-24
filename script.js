// Navbar toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Active link highlight on click
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    document.querySelectorAll('.nav-links a').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    if(nav.classList.contains('open')){ nav.classList.remove('open'); }
  });
});

document.querySelectorAll('.accordion').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';
    panel.style.maxHeight = isOpen ? '0' : panel.scrollHeight + 'px';
    btn.classList.toggle('open', !isOpen); // <-- add this line
  });
});

function sortTableBy(columnIndex, type='text'){
  const table = document.getElementById('infoTable');
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll('tr'));
  const currentAsc = table.getAttribute('data-sort-col') == columnIndex && table.getAttribute('data-sort-dir') == 'asc';
  const dir = currentAsc ? 'desc' : 'asc';
  rows.sort((a,b)=>{
    const ta = a.children[columnIndex].textContent.trim();
    const tb = b.children[columnIndex].textContent.trim();
    if(type==='num'){ return (parseFloat(ta) - parseFloat(tb)) * (dir==='asc' ? 1 : -1); }
    return ta.localeCompare(tb) * (dir==='asc' ? 1 : -1);
  });
  rows.forEach(r=>tbody.appendChild(r));
  table.setAttribute('data-sort-col', columnIndex);
  table.setAttribute('data-sort-dir', dir);
}
document.querySelectorAll('#infoTable thead th').forEach((th,i)=>{
  th.addEventListener('click', ()=> sortTableBy(i, th.dataset.sort || 'text'));
});

// Year in footer
const y = document.getElementById('year');
if (y){ y.textContent = new Date().getFullYear(); }
