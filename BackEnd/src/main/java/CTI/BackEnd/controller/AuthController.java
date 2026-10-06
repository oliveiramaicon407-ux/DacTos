package CTI.BackEnd.controller;

import CTI.BackEnd.config.TokenService;
import CTI.BackEnd.dto.LoginDTO;
import CTI.BackEnd.dto.RegistroDTO;
import CTI.BackEnd.model.Usuario;
import CTI.BackEnd.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UsuarioRepository repository;
    private final TokenService tokenService;
    private final PasswordEncoder passwordEncoder;

    // Construtor no lugar dos @Autowired (resolve os avisos amarelos da imagem)
    public AuthController(AuthenticationManager authenticationManager, 
                          UsuarioRepository repository, 
                          TokenService tokenService, 
                          PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.repository = repository;
        this.tokenService = tokenService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.senha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        // Pega o email validado pelo Spring Security
        var emailUsuarioLogado = auth.getName(); 
        
        // Busca o nosso Usuario no banco para passar pro TokenService
        var usuario = repository.findByEmail(emailUsuarioLogado).orElseThrow(); 
        
        var token = tokenService.gerarToken(usuario);

        return ResponseEntity.ok(token);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegistroDTO data) {
        if (this.repository.findByEmail(data.email()).isPresent()) {
            return ResponseEntity.badRequest().body("Email já cadastrado!");
        }

        String senhaCriptografada = passwordEncoder.encode(data.senha());
        
        Usuario novoUsuario = new Usuario();
        novoUsuario.setNome(data.nome());
        novoUsuario.setEmail(data.email());
        novoUsuario.setSenha(senhaCriptografada);

        this.repository.save(novoUsuario);

        return ResponseEntity.ok("Usuário cadastrado com sucesso!");
    }
}