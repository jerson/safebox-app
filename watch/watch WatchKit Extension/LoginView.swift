//
//  LoginView.swift
//  watch WatchKit Extension
//
//  Created by Usuario on 8/13/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI

struct LoginView: View {

    
    @State var username: String = ""
    @State var password: String = ""
    @State var showingAlert = false
    
    var body: some View {
        ScrollView  {
            VStack(spacing: 10) {
            Text("SafeBox")
            TextField("Username", text: self.$username)
            TextField("Password", text: self.$password)
            Button(action: {
            
                do{
                    let response = try Client.connect().loginPremium(self.username, password: self.password)
                      
                    print("Response: \(response)")
                }catch let error {
                  print("Error: \(error)")
                }
                self.username = "test"
                
                
            }) {
                Text("Sign In")
                }
            }
        }
        .padding(.horizontal)
    }
}

#if DEBUG
struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
#endif
