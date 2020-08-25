package br.com.squadratecnologia.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.squadratecnologia.exception.ResourceNotFoundException;
import br.com.squadratecnologia.model.Sistema;
import br.com.squadratecnologia.repository.SistemaRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class SistemaController {
	
	@Autowired
	private SistemaRepository sistemaRepository;

	@GetMapping("/sistemas")
	public List<Sistema> getAllSistemas() {
		return sistemaRepository.findAll();
	}
	
	@GetMapping("/teste")
	public List<Sistema> getAllSistema() {
		return sistemaRepository.findAll();
	}

	@GetMapping("/sistema/{id}")
	public ResponseEntity<Sistema> getSistemaById(@PathVariable(value = "id") Long idSistema)
			throws ResourceNotFoundException {
		Sistema sistema = sistemaRepository.findById(idSistema)
				.orElseThrow(() -> new ResourceNotFoundException("Sistema not found for this id :: " + idSistema));
		return ResponseEntity.ok().body(sistema);
	}

	@PostMapping("/sistema")
	public Sistema createSistema(@Valid @RequestBody Sistema sistema) {
		return sistemaRepository.save(sistema);
	}

	@PutMapping("/sistema/{id}")
	public ResponseEntity<Sistema> updateSitema(@PathVariable(value = "id") Long idSistema, @Valid @RequestBody Sistema sistemaSelect) throws ResourceNotFoundException {
		Sistema sistema = sistemaRepository.findById(idSistema)
				.orElseThrow(() -> new ResourceNotFoundException("Sistema not found for this id :: " + idSistema));

		sistema.setDescricao(sistemaSelect.getDescricao());
		sistema.setSigla(sistemaSelect.getSigla());
		sistema.setEmail(sistemaSelect.getEmail());
		final Sistema updatedSistema = sistemaRepository.save(sistema);
		return ResponseEntity.ok(updatedSistema);
	}

	@DeleteMapping("/sistema/{id}")
	public Map<String, Boolean> deleteSistema(@PathVariable(value = "id") Long idSistema)
			throws ResourceNotFoundException {
		Sistema sistema = sistemaRepository.findById(idSistema)
				.orElseThrow(() -> new ResourceNotFoundException("Sistema not found for this id :: " + idSistema));

		sistemaRepository.delete(sistema);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
