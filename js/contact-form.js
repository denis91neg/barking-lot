WebElement button = driver.findElement(By.id("template-contactform-submit"));
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("arguments[0].disabled = true;", button);