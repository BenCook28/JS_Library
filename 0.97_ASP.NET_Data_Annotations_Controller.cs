using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

using ForgingAhead.Models;

namespace ForgingAhead.Controllers
{
    public class CharacterController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CharacterController(ApplicationDbContext context)
        {
            _context = context;
        }

        pubklic IActionResult Create(Character character)
        {
            _context.Characters.Add(character);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}

// _context is the variable's name, following the convention for
// readonly variables.