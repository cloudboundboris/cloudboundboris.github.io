using System;
using System.IO;
using System.Threading.Tasks;
using System.Net.Http;  
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text;




namespace Company.Function


{
    public static class GetResumeCounter
    {
        [FunctionName("GetResumeCounter")]
           
            public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, 
            [CosmosDB(databaseName:"azureresumedb", collectionName: "counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName:"azureresumedb", collectionName: "counter", ConnectionStringSetting = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] out Counter upcounter,
            ILogger log)
        {
            log.LogInformation("+++++ trigger function processed a request ++++++.");
            
            upcounter = counter;
            upcounter.Count +=1;

            var jsonToReturn = JsonConvert.SerializeObject(counter);
              
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
               {
                   Content = new StringContent(jsonToReturn, Encoding.UTF8, "application/json")
               };
                
        } 
    }
}
