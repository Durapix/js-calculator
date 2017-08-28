# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class NumpadInputTestID5(unittest.TestCase):
    def setUp(self):
        
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(30)
        self.base_url = "http://localhost:8080/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_numpad_input_test_i_d6(self):
        driver = self.driver
        for i in range(0,9):
            driver.get(self.base_url)
            driver.find_element_by_id("txtOperandA").click()
            driver.find_element_by_id("btn"+ str(i)).click()
            driver.find_element_by_id("txtOperandB").click()
            driver.find_element_by_id("btn"+str(i)).click()
            try: self.assertEqual(str(i), driver.find_element_by_id("txtOperandA").get_attribute("value"))
            except AssertionError as e: self.verificationErrors.append(str(e))
            try: self.assertEqual(str(i), driver.find_element_by_id("txtOperandB").get_attribute("value"))
            except AssertionError as e: self.verificationErrors.append(str(e))
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)
        

if __name__ == "__main__":
    unittest.main()
    
