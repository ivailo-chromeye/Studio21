 1. Go to [SES](https://console.aws.amazon.com/ses/home) and verify the email address that will be receiving the emails.
 2. Go to [Lambdas](console.aws.amazon.com/lambda/home) and **Create a function**. Configurations: Author from scratch, Runtime: Node.js 14.x.
 3. After creation, go to **Configuration --> Permissions**. Click **Edit** on the **Execution role** and then click on **View the ROLE-NAME-HERE role** on the IAM console.
 4. Click on **Add inline policy** and then select the **JSON** tab.
 5. Paste the following code from ***IAM Policy.json*** file in the **Helpers** folder and then review and create the policy.
 6. Go back to the Lambda and select the index.js file and replace the code in it with the code from ***Lambda_code.js*** file in the **Helpers** folder. Click on **Deploy**.
 7. Click on **Add trigger** and select **API Gateway** from the dropdown.
 8. In the **API** field select **Create an API**.
 9. Select: **REST API**
 10. Security: **Open** 
 11. Click **Add**
 12. After creation, click on API Gateway:  **NAME_OF_THE-API**
 13. Click on the **Actions** button and select **Create Method**
 14. Create a **POST** method. For Integration type select **Lambda Function**. In the Lambda Function field type the name of the Lambda Function (has autocomplete).
 15. After the POST method is created, click on the **Actions** button again and select **Deploy API**. For **Deployment stage** select **default**. Click on **Deploy**.
 16. In the Lambda code you can change the Sender and the receiver(s) of the email. Also check that you have entered the correct region on line 2 of the code.