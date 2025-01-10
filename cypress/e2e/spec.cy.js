describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");
    cy.get("header");
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });
  
  describe("User accesses dashboard (overview) page", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });
  
    it("should allow user to access the dashboard (overview) after successful login", () => {
      // Langkah 1: User membuka aplikasi dan melakukan login
      cy.visit("http://localhost:5173/");
      cy.url().should("include", "/login");
  
      // Langkah 2: User memasukkan kredensial yang valid
      cy.get("input#email")
        .should("be.visible")
        .type("hello@example.com");
  
      cy.get("input#password")
        .should("be.visible")
        .type("123456");
  
      // Langkah 3: User menekan tombol login
      cy.get("button").contains("Login").click();

      // Langkah 4: Verifikasi redirect ke dashboard
      cy.url().should("eq", "http://localhost:5173/");
  
      // Langkah 5: Verifikasi komponen-komponen dashboard
      // Verifikasi navbar dan header
      cy.get("nav").should("be.visible");
      cy.get("header").should("be.visible");

      // Verifikasi card-card di dashboard
      cy.get("main").within(() => {
        // Verifikasi CardBalance
        cy.contains("Total Balance").should("be.visible");
        
        // Verifikasi CardGoal
        cy.contains("Goals").should("be.visible");
        
        // Verifikasi CardBill
        cy.contains("Upcoming Bill").should("be.visible");
        
        // Verifikasi CardTransaction
        cy.contains("Recent Transaction").should("be.visible");
        
        // Verifikasi CardStatistic
        cy.contains("Statistic").should("be.visible");
        

      });

      // Langkah 6: Verifikasi loading state dan data pada CardBill
      cy.get(".animate-pulse").should("exist"); // Loading state muncul
      cy.wait(200); // Tunggu data dimuat
      cy.get(".animate-pulse").should("not.exist"); // Loading state hilang
      
      // Verifikasi data bills sudah dimuat
      cy.contains("Figma - Yearly Plan").should("be.visible");
      cy.contains("Adobe Inc - Yearly Plan").should("be.visible");

      // Langkah 7: Verifikasi persistensi data setelah refresh
      cy.reload();
      cy.wait(1000);

      // Verifikasi data masih ada setelah refresh
      cy.get("nav").should("be.visible");
      cy.get("header").should("be.visible");
      cy.contains("Upcoming Bill").should("be.visible");


    });
  });
    
});