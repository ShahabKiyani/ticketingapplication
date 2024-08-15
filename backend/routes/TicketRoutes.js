import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

//CRUD

// POST (Create Ticket)
router.post("/api/tickets", async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = await Ticket.create(ticketData);
    res.status(201).json({ message: "Ticket Created", newTicket });
  } catch (error) {
    res.status(500).json({ message: "broke", error });
  }
});

// GET (Single Ticket by ID)
router.get("/api/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundTicket = await Ticket.findById(id);
    if (foundTicket) {
      res.status(200).json(foundTicket);
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// GET (All Tickets)
router.get("/api/tickets", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// PUT (Update Ticket by ID)
router.put("/api/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ticketData = req.body;
    const updatedTicket = await Ticket.findByIdAndUpdate(id, ticketData, {
      new: true,
    });
    if (updatedTicket) {
      res.status(200).json({ message: "Ticket updated", updatedTicket });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// DELETE (Delete Ticket by ID)
router.delete("/api/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTicket = await Ticket.findByIdAndDelete(id);
    if (deletedTicket) {
      res.status(200).json({ message: "Ticket Deleted" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

export default router;
