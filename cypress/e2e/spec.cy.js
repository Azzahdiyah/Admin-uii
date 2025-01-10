describe("User login", () => {
  // Test case login yang sudah ada tetap dipertahankan
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

  // Test case login invalid yang sudah ada tetap dipertahankan
  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });

  // Tambahkan test case baru untuk mengakses dashboard
  describe("Dashboard Page", () => {
    beforeEach(() => {
      // Login terlebih dahulu sebelum mengakses dashboard
      cy.visit("http://localhost:5173/");
      cy.get("input#email").type("hello@example.com");
      cy.get("input#password").type("123456");
      cy.get("button").contains("Login").click();
      cy.wait(2000); // Tunggu sampai login selesai
    });

    it("should display dashboard components correctly", () => {
      // Verifikasi URL dashboard
      cy.url().should("eq", "http://localhost:5173/");

      // Verifikasi komponen navbar
      cy.get("nav").should("be.visible");
      cy.get("nav").find("a").should("have.length.at.least", 1);

      // Verifikasi header
      cy.get("header").should("be.visible");
      cy.get("header").should("contain", "Overview");

      // Verifikasi komponen dashboard
      cy.get("main").should("be.visible");

      // Verifikasi card bills
      cy.get("div").contains("Upcoming Bill").should("be.visible");
      cy.wait(2000); // Tunggu data bills dimuat
      
      // Verifikasi loading state
      cy.get(".animate-pulse").should("exist");
      cy.wait(3000); // Tunggu loading selesai
      cy.get(".animate-pulse").should("not.exist");

      // Verifikasi data bills sudah dimuat
      cy.get("div").contains("Upcoming Bill")
        .parent()
        .find("div")
        .should("have.length.at.least", 1);

      // Verifikasi username tersimpan setelah refresh
      cy.reload();
      cy.wait(2000);
      cy.get("header").should("contain", "Overview");
    });

    it("should handle error states correctly", () => {
      // Simulasi error network
      cy.intercept("GET", "https://jwt-auth-eight-neon.vercel.app/bills", {
        statusCode: 500,
        body: { message: "Internal Server Error" }
      });

      cy.reload();
      cy.wait(2000);

      // Verifikasi pesan error
      cy.get("div").contains("Terjadi kesalahan saat mengambil data tagihan")
        .should("be.visible");
    });

    it("should handle session expiry correctly", () => {
      // Simulasi error 401
      cy.intercept("GET", "https://jwt-auth-eight-neon.vercel.app/bills", {
        statusCode: 401,
        body: { message: "Unauthorized" }
      });

      cy.reload();
      cy.wait(2000);

      // Verifikasi redirect ke login
      cy.url().should("include", "/login");
      cy.get("div").contains("Sesi telah berakhir. Silakan login kembali")
        .should("be.visible");
    });
  });
});