# Test info

- Name: Popup
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Interview.spec.js:7:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('#productTable tbody tr').first().locator('td') resolved to 4 elements:
    1) <td>1</td> aka getByRole('cell', { name: '1', exact: true })
    2) <td>Smartphone</td> aka getByRole('cell', { name: 'Smartphone' })
    3) <td>$10.99</td> aka getByRole('cell', { name: '$10.99' })
    4) <td>…</td> aka getByRole('row', { name: '1 Smartphone $' }).getByRole('cell').nth(3)

Call log:
  - waiting for locator('#productTable tbody tr').first().locator('td')

    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Interview.spec.js:16:43
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox
- text: to
- textbox
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - cell "BookName"
      - cell "Author"
      - cell "Subject"
      - cell "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Memory (MB) Network (Mbps) Disk (MB/s) CPU (%)":
      - cell "Name"
      - cell "Memory (MB)"
      - cell "Network (Mbps)"
      - cell "Disk (MB/s)"
      - cell "CPU (%)"
  - rowgroup:
    - row "Internet Explorer 31.8 MB 6.3 Mbps 0.05 MB/s 4.2%":
      - cell "Internet Explorer"
      - cell "31.8 MB"
      - cell "6.3 Mbps"
      - cell "0.05 MB/s"
      - cell "4.2%"
    - row "Firefox 95.2 MB 0.1 Mbps 0.66 MB/s 3.0%":
      - cell "Firefox"
      - cell "95.2 MB"
      - cell "0.1 Mbps"
      - cell "0.66 MB/s"
      - cell "3.0%"
    - row "System 49.6 MB 4.3 Mbps 0.41 MB/s 1.6%":
      - cell "System"
      - cell "49.6 MB"
      - cell "4.3 Mbps"
      - cell "0.41 MB/s"
      - cell "1.6%"
    - row "Chrome 65.8 MB 8.1 Mbps 0.83 MB/s 5.2%":
      - cell "Chrome"
      - cell "65.8 MB"
      - cell "8.1 Mbps"
      - cell "0.83 MB/s"
      - cell "5.2%"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 5.2%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 95.2 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 8.1 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.66 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - cell "ID"
      - cell "Name"
      - cell "Price"
      - cell "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - text: 3,599,123
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 |
   4 |
   5 |
   6 |
   7 | test("Popup", async ({page}) =>{
   8 |     // const context = await browser.newContext();
   9 | // const page = await context.newPage();
   10 |
   11 |      await page.goto("https://testautomationpractice.blogspot.com/");
   12 |
   13 |      const rows = await page.locator("#productTable tbody tr").all();
   14 |
   15 |      for(let r of rows) {
>  16 |           let txt = await r.locator("td").textContent();
      |                                           ^ Error: locator.textContent: Error: strict mode violation: locator('#productTable tbody tr').first().locator('td') resolved to 4 elements:
   17 |           console.log(txt);
   18 |      }
   19 |      console.log(await rows.count());
   20 |
   21 |     //  console.log(await page.title())
   22 |
   23 |     //  await page.getByRole('button', {name:"Point Me"}).hover();
   24 |
   25 |     //  await page.getByRole("button", {name:"Copy Text"}).dblclick();
   26 |
   27 |
   28 |     //  const src = await page.locator("//p[text()='Drag me to my target']/parent::div");
   29 |     //  const tar = await page.locator("//p[text()='Drop here']/parent::div");
   30 |
   31 |     //  await page.waitForTimeout(2000);
   32 |     //  await src.dragTo(tar);
   33 |      await page.waitForTimeout(5000);
   34 |
   35 |
   36 | //      const popupPromise = page.waitForEvent('popup');
   37 | //    await page.locator("//button[text()='Popup Windows']").click();
   38 | // const popup = await popupPromise;
   39 | //   console.log(await popup.title())
   40 |
   41 |
   42 |
   43 |
   44 | })
   45 | // test("", async ({browser}) =>{
   46 |
   47 | //      for(let p of context.pages()){
   48 | //         let title = await p.title();
   49 | //         if(title ==='Automation Testing Practice'){
   50 | //             p.bringToFront();
   51 | //             break;
   52 | //         }
   53 | //      }
   54 |
   55 | //      await page.title();
   56 | // await page.waitForTimeout(5000);
   57 |
   58 | // })
   59 |
   60 | // test("Alert Popup", async ({browser}) =>{
   61 | //     const context = await browser.newContext();
   62 | //     const page = await context.newPage();
   63 |
   64 |
   65 | //     await page.goto("https://testautomationpractice.blogspot.com/");
   66 |
   67 | //     page.on('dialog', async dialog =>{
   68 | //         await expect(dialog.type()).toContain("prompt");
   69 | //         await expect(dialog.message()).toContain("Please enter your name:");
   70 | //         await expect(dialog.defaultValue()).toContain("Harry Potter");
   71 | //         await dialog.accept("MADHU");
   72 |
   73 | //     });
   74 | //     await page.locator("//button[text()='Prompt Alert']");
   75 |
   76 |
   77 | // })
   78 |
   79 |
   80 | // test("Handling multiple check boxes", async({page}) =>{
   81 |
   82 | //     await page.goto("https://testautomationpractice.blogspot.com/");
   83 | //     const locators = [
   84 | //         '#sunday',
   85 | //         '#tuesday'
   86 | //     ];
   87 |
   88 | //     for(let l of locators) {
   89 | //         await page.locator(l).check();
   90 | //     }
   91 |
   92 |
   93 | //     await page.locator("//p[text()='Date Picker 1 (mm/dd/yyyy): ']/child::input[@id='datepicker']").fill("2025-03-12");
   94 | //     await page.locator("//div[@class='date-picker-box']/child::input[@id='start-date']").click();
   95 | //     await page.locator("#singleFileInput").setInputFiles("tstData/MadhukumarA_4YrsAutomation.pdf");
   96 | //     await page.locator("#multipleFilesInput").setInputFiles(['tstData/image.pdf',
   97 | //         'tstData/MadhukumarA_4YrsAutomation.pdf'
   98 | //     ]);
   99 |
  100 | //     const but = await page.locator("//h2[text()='Dynamic Button']/parent::div/child::div[@class='widget-content']/child::button");
  101 | //     if(but.textContent() === 'START') {
  102 | //                 await but.click();
  103 |
  104 | //         setTimeout(() =>{
  105 | //      but.click();
  106 |
  107 | //         }, 5000);
  108 | //     }
  109 | //     await page.waitForTimeout(5000);
  110 | // })
  111 |
  112 |
  113 |
  114 |
  115 |
  116 |
```