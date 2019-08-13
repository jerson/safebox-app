//
//  LoginView.swift
//  watch WatchKit Extension
//
//  Created by Usuario on 8/13/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI

struct LoginView: View {
    
    let host: HostingController!
    
    @State var username = "jerson"
    @State var password = "123456"
    @State var showingAlert = false
    @State var error = ""
    
    var body: some View {
        ScrollView  {
            VStack(spacing: 10) {
                Text("SafeBox")
                    .font(.headline)
                    .foregroundColor(Color(red: 0.56, green: 0.40, blue: 0.96, opacity: 1.0))
                    .multilineTextAlignment(.center)
            TextField("Username", text: self.$username)
            SecureField("Password", text: self.$password)
            Button(action: {

            self.error = ""
                do{
                    _ = try Client.connect().loginPremium(self.username, password: self.password)

                    self.password = ""
                    self.host.presentAccounts()
                }catch let e {
                    self.showingAlert = true
                    self.error = e.localizedDescription
                }
            }) {
                Text("Sign In").foregroundColor(Color(red: 0.98, green: 0.99, blue: 1.0, opacity: 1.0))
            }.alert(isPresented: self.$showingAlert) { () -> Alert in
                Alert.init(title: Text(self.error))
                }
            }
        }
        .padding(.horizontal)
    }
}

#if DEBUG
struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView(host:nil)
    }
}
#endif
