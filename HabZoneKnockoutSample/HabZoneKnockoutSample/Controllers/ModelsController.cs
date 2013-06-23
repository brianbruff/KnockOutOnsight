using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HabZoneKnockoutSample.Controllers
{
    public class ModelsController : ApiController
    {
        // GET api/makes
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/makes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/makes
        public void Post([FromBody]string value)
        {
        }

        // PUT api/makes/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/makes/5
        public void Delete(int id)
        {
        }
    }
}
