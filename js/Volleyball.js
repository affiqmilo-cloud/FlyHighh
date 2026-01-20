package com.nishida;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class NishidaApplication {
    public static void main(String[] args) {
        SpringApplication.run(NishidaApplication.class, args);
    }
}

// --- DATA MODEL ---
class Article {
    private String title;
    private String imageUrl;
    private String link;

    public Article(String title, String imageUrl, String link) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.link = link;
    }
    public String getTitle() { return title; }
    public String getImageUrl() { return imageUrl; }
    public String getLink() { return link; }
}

// --- CONTROLLER ---
@Controller
class VolleyballController {

    @GetMapping("/")
    public String index(Model model) {
        // Menghantar senarai artikel secara dinamik ke HTML
        List<Article> articles = Arrays.asList(
            new Article("NATIONAL TEAM VOLLEYBALL", "image/download (12).jpg", "National Team.html"),
            new Article("NISHIDA CAREER", "image/career.jpg", "Nishida Career.html"),
            new Article("TOURNAMENT SCHEDULE", "image/Volleyball World.jpg", "https://en.volleyballworld.com")
        );
        
        model.addAttribute("articles", articles);
        return "Volleyball"; // Memanggil fail Volleyball.html di folder templates
    }

    @PostMapping("/register")
    public String registerUser(@RequestParam String email, Model model) {
        // Logik simpan data pendaftaran
        model.addAttribute("message", "Berjaya! Emel " + email + " telah didaftarkan.");
        return "RegisterResult"; 
    }
}