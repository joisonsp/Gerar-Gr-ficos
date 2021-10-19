<?php

$pdo = new PDO('mysql:host=localhost;dbname=[nome-do-banco];port=3306;charset=utf8', 'root');

$sql_enviados = $pdo->prepare("SELECT * FROM [nome-da-tabela] 
        
            WHERE
            id_representante  = 1 AND status = 1 AND
            data_criacao BETWEEN CAST('2021-04-14' AS DATE) AND CAST('2021-06-26' AS DATE)

        ");

$sql_enviados->execute();

while($results = $sql_enviados->fetch(PDO::FETCH_ASSOC)){
    $result[]=$results;
}

echo json_encode($result);


?>