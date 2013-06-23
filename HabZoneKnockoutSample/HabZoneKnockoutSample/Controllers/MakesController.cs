using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HabZoneKnockoutSample.Models;

namespace HabZoneKnockoutSample.Controllers
{
    public class MakesController : ApiController
    {
        // GET api/makes
        public IEnumerable<CarMakeInfo> Get()
        {
            return SampleData.CarMakes.Select(m => new CarMakeInfo{ Id = m.Id, Name = m.Name });
        }

        // GET api/makes/5
        public CarMake Get(int id)
        {
            return SampleData.CarMakes.First(m => m.Id == id); // exception if not found!
        }

        
        
    }
}
