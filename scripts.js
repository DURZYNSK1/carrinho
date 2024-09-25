function calcularTotal() {
    let totalCompra = 0;
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const qtd = row.querySelector(".qtd").value;
        const preco = parseFloat(row.querySelector(".preco").textContent.replace('R$', '').replace(',', '.'));
        const valorItem = qtd * preco;
        row.querySelector(".valor").textContent = "R$ " + valorItem.toFixed(2).replace('.', ',');
        totalCompra += valorItem;
    });
    document.getElementById("totalCompra").textContent = "R$ " + totalCompra.toFixed(2).replace('.', ',');
}
