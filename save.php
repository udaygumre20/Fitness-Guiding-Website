<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Basic validation
    if (empty($name) || empty($username) || empty($password)) {
        echo "All fields are required.";
        exit;
    }

    try {
        $stmt = $conn->prepare("INSERT INTO users (name, username, password) VALUES (:name, :username, :password)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);

        if ($stmt->execute()) {
            // Success: Redirect to home page
            header("Location: index.html?signup=success&name=" . urlencode($name));
            exit();
        } else {
            echo "Error saving user.";
        }
    } catch (PDOException $e) {
        echo "Database Error: " . $e->getMessage();
    }
}